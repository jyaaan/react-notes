const Redux = require('redux');

const initialState = ['note1, hooray!', 'note2, boo!'];

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_NOTE':
    case 'RETRIEVE_NOTE':
    case 'DELETE_NOTE':
    default:
      return state;
  }
}

const noteInput = (state = [], action) => {
  switch (action.type) {
    case 'INPUT_CHANGED':
      return 'will reflect change later';
    case 'NOTE_CREATED':
      return 'note should have been created';
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
