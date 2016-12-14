
import { combineReducers, ActionReducer, Action } from '@ngrx/store';
import { compose } from '@ngrx/core';

export interface AppState {
  router: {
    path: string;
    history: Array<any>;
  };
}

export const stateReducer: ActionReducer<AppState> = (state: AppState = { router: {path: '', history: []}}, action: Action) => {

  if (action.type === '@ngrx/store/init') {
    return {
      router: {
        path: '',
        history: []
      }
    };
  } else {
    state.router.path = action.payload.path;
    state.router.history.push(action.payload);
  }
  return state;
};

const AppState = compose(combineReducers)({
  router: stateReducer
});

export { AppState };
