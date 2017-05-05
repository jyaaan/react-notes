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
