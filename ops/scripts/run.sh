#!/bin/bash

# Example script to generate your certs automatically.
podName=$(kubectl get pods -l 'app=letsencrypt' -o name | sed 's/pod\///')
TO_ENCRYPT=$(kubectl get pod | grep 'letsencrypt' | cut -d = -f 3 | cut -f1 -d ' ''')

kubectl exec -it "$TO_ENCRYPT" /app/get-cert.sh \
  stage.icanhelpyouwiththat.org \
  stageapi.icanhelpyouwiththat.org
