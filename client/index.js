const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');
const NotesList = require('../notes');

const render = () => {
  const currState = store.getState();
  const $container = document.querySelector('.container');
  ReactDOM.render(<NotesList {...currState} />, $container);
}

store.subscribe(render);

render();
