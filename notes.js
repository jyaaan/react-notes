const React = require('react');
const store = require('./store');



const NotesList = props => {
  return (
    <ul>
      { props.notes.map((note, index) => {
        return <li key={ index }>{note}</li>
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
    store.dispatch({
      type: 'NOTE_CREATED',
      text: store.getState().noteInput
    });
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
