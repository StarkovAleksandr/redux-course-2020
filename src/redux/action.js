import { INCREMENT, DECREMENT, TOGGLE_THEME } from './types';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const asyncIncrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};

export const changeTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
};
