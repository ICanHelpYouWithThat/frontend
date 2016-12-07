#! /bin/bash

export CHROME_BIN=chromium-browser
export DISPLAY=:99.0
export CXX=g++-4.8
sh -e /etc/init.d/xvfb start
if [ ! -d "${HOME}/google-cloud-sdk" ]; then curl https://sdk.cloud.google.com | bash; fi
gcloud --quiet version
gcloud --quiet components install kubectl
kubectl version --client=true
if [[ $TRAVIS_OS_NAME == "linux" ]]; then export CXX=g++-4.8; fi
echo $GCLOUD_KEY | base64 --decode > ${PWD}/gcloud.json
export GOOGLE_APPLICATION_CREDENTIALS="${PWD}/gcloud.json"
gcloud --quiet auth activate-service-account --key-file "${GOOGLE_APPLICATION_CREDENTIALS}"

gcloud --quiet config set project "${PROJECT_ID}"

gcloud --quiet config set compute/zone "${ZONE}"

gcloud docker -a

docker build -t us.gcr.io/icanhelpyouwiththat-149304/frontend:latest .

docker push us.gcr.io/icanhelpyouwiththat-149304/frontend:latest > /dev/null

gcloud container clusters get-credentials $CLUSTER_ID --zone $ZONE

MIN_NODES=1

# Check if env exists

ENV_CHECK=$(gcloud container clusters list | grep ${ZONE} | grep $CLUSTER_ID)
echo "Environment is $ENV_CHECK in $ZONE"
if [[ "$ENV_CHECK" == $CLUSTER_ID* && "$ENV_CHECK" == *"${ZONE}"* ]]; then
    # If it does don't create.
    echo "Environment already exists."
    gcloud container clusters get-credentials $CLUSTER_ID -z ${ZONE}
    kubectl config use-context "${CLUSTER_ID}"

    export KUBECONFIG="${PWD}/.kube/config"

    kubectl delete pods -l name=frontend
else
    # else spin up environment
        # Create environemnt with google cloud monitoring 8 core for production and stage
        echo "Environmant doesn't exist.  Creating..."
        gcloud container clusters create $CLUSTER_ID -z ${ZONE} --machine-type n1-standard-1 --enable-cloud-logging --enable-cloud-monitoring
fi


