import { DECREMENT, INCREMENT } from './types';

export const rootReducer = (state, action) => {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
};
