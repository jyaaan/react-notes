const Redux = require('redux');
var path = require('path');

const initialState = [
  { text: 'note1, hooray!', date: '4/30/2017' },
  { text: 'note2, boo!', date: '4/30/2017' }
];

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTE_CREATED':
      return state.concat(action.note);
    case 'NOTES_LOADED':
      return [...action.notes];
    default:
      return state;
  }
}

const noteInput = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_CHANGED':
      return action.text;
    case 'NOTE_CREATED':
      return '';
    default:
      return state;
  }
}

const reducer = Redux.combineReducers({
  notes,
  noteInput
});

const store = Redux.createStore(reducer);

module.exports = store;
