const express = require('express');
const bodyParser = require('body-parser');
const {
  ObjectID
} = require('mongodb');

const mongoose = require('./db/mongoose');
const {
  Todo
} = require('./models/todo');
const {
  User
} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//POST a TODO
app.post('/todos', (req, res) => {

  const todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e);
  })
})

//GET ALL TODOS
app.get('/todos', (req, res) => {

  Todo.find().then((todos) => {
    res.send({
      todos
    })
  }, (e) => {
    res.status(400).send(e)
  })
})
//GET TODO by ID

app.get('/todos/:id', (req, res) => {

  const id = req.params.id;

  if (ObjectID.isValid(id)) {
    Todo.findById(id)
      .then((todo) => {

        if (todo) {
          res.send({
            todo
          })
        } else {
          res.status(404).send();
        }
      })
      .catch((e) => {
        res.status(400).send()
      })

  } else {
    res.status(404).send();
  }

})
app.listen(port, () => {
  console.log(`Started on port ${port}`);
})
module.exports = {
  app
}