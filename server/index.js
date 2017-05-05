var express = require('express');
var app = express();
var path = require('path');
const store = require('../store');

function getDate() {
  const dateNow = new Date(Date.now());
  return (dateNow.getMonth() + 1 + '/' + dateNow.getDate() + '/' + dateNow.getFullYear());
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/list', (req, res) => {

});

app.post('/new/:text', (req, res) => {
  const newNote = {
    type: 'NOTE_CREATED',
    note: {
      text: req.params.text,
      date: getDate()
    }
  };
  console.log(newNote);
  store.dispatch(newNote);
  res.send(newNote);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
