import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { asyncIncrement, decrement, increment } from './redux/action';
import { rootReducer } from './redux/rootReducer';
import './styles.css';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const logger = (state) => {
  return (next) => {
    return (action) => {
      return next(action);
    };
  };
};

const store = createStore(rootReducer, 0, applyMiddleware(thunk, logger));

window.store = store;

addBtn.addEventListener('click', () => {
  store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});

store.subscribe(() => {
  const state = store.getState();

  counter.textContent = state;
});

store.dispatch({ type: 'INIT_APPLICATION' });

themeBtn.addEventListener('click', () => {
  //   document.body.classList.toggle('dark');
});
