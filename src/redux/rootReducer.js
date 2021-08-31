import { combineReducers } from 'redux';
import { DECREMENT, INCREMENT, TOGGLE_THEME } from './types';

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light';

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
