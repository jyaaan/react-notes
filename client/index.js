const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');

const render = () => {
  const currState = store.getState();
  
}

store.subscribe(render);

render();
