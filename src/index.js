import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {
  asyncIncrement,
  changeTheme,
  decrement,
  increment,
} from './redux/action';
import { rootReducer } from './redux/rootReducer';
import './styles.css';

const counterElem = document.getElementById('counter');
const addBtnElem = document.getElementById('add');
const subBtnElem = document.getElementById('sub');
const asyncBtnElem = document.getElementById('async');
const themeBtnElem = document.getElementById('theme');

// const logger = (state) => {
//   return (next) => {
//     return (action) => {
//       return next(action);
//     };
//   };
// };

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

window.store = store;

addBtnElem.addEventListener('click', () => {
  store.dispatch(increment());
});

subBtnElem.addEventListener('click', () => {
  store.dispatch(decrement());
});

asyncBtnElem.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});

themeBtnElem.addEventListener('click', () => {
  store.dispatch(changeTheme());
});

store.subscribe(() => {
  const { counter, theme } = store.getState();

  counterElem.textContent = counter.toString();

  const elem = document.body.classList;

  if (theme !== 'light') {
    elem.add('dark');
  } else {
    elem.remove('dark');
  }
});

store.dispatch({ type: 'INIT_APPLICATION' });
