const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
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

//DELETE TODO BY ID
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  if (ObjectID.isValid(id)) {

    Todo.findByIdAndRemove(id).then((todo) => {
      if (todo) {
        res.send({
          todo
        })

      } else {
        res.status(404).send();
      }
    }).catch((e) => {
      res.status(400).status()
    })

  } else {
    res.send(404).send();
  }
})

app.patch('/todos/:id', (req, res) => {

  const id = req.params.id;
  const body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) {
    return res.sendStatus(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, {
    $set: body
  }, {
    new: true
  }).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.send({
      todo
    });

  }).catch((e) => {
    res.status(400).send()
  })
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
})
module.exports = {
  app
}