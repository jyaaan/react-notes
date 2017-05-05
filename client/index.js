const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store');
const { NotesList, NoteForm } = require('../notes');

const render = () => {
  const currState = store.getState();
  const $container = document.querySelector('.container');
  ReactDOM.render(
    <div>
      <NoteForm {...currState} />
      <NotesList {...currState} />
    </div>,
    $container
  );
}

store.subscribe(render);

render();
