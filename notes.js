const React = require('react');
const store = require('./store');

const NotesList = props => {
  return (
    <ul>
      { props.notes.map((note) => {
        return <li>{note}</li>
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
    store.dispatch({
      type: 'NOTE_CREATED',
      text: 'new note!'
    });
  };
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <textarea
          value={ props.noteInput }
          onChange={ handleChange }></textarea>
      </form>
    </div>
  );
}

module.exports = { NotesList, NoteForm };
