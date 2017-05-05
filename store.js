const Redux = require('redux');

const initialState = ['note1, hooray!', 'note2, boo!'];

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTE_CREATED':
      return state.concat(action.text);
    default:
      return state;
  }
}

const noteInput = (state = ['default text'], action) => {
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
