const React = require('react');
const store = require('./store');
var path = require('path');

function getDate() {
  const dateNow = new Date(Date.now());
  return (dateNow.getMonth() + 1 + '/' + dateNow.getDate() + '/' + dateNow.getFullYear());
}

const NotesList = props => {
  return (
    <ul>
      { props.notes.map((note, index) => {
        return (
          <li key={ index }>
            <span>{ note.date }</span>
            <p>{ note.text }</p>
          </li>
        )
      })}
    </ul>
  );
}

const NoteForm = props => {
  const handleChange = event => {
    store.dispatch({
      type: 'INPUT_CHANGED',
      text: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (store.getState().noteInput !== ''){
      const postPath = path.join(__dirname, 'new', store.getState().noteInput);
      const request = new Request(postPath, {
        method: 'POST'
      });
      fetch(request)
        .then((result) => {
          console.log(result);
        })
    }
  };
  return (
    <div>
      <form>
        <textarea
          value={ props.noteInput }
          onChange={ handleChange }>
        </textarea>
        <button onClick={ handleSubmit }>Save</button>
      </form>
    </div>
  );
}

module.exports = { NotesList, NoteForm };
