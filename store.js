const Redux = require('redux');

const initialState = ['note1', 'note2'];

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_NOTE':
    case 'RETRIEVE_NOTE':
    case 'DELETE_NOTE':
    default:
      return state;
  }
}

const reducer = Redux.combineReducers({
  notes
});

const store = Redux.createStore(reducer);

module.exports = store;
