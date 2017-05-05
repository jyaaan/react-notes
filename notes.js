const React = require('react');

const NotesList = props => {
  return (
    <ul>
      { props.notes.map((note) => {
        return <li>{note}</li>
      })}
    </ul>
  );
}

module.exports = NotesList;
