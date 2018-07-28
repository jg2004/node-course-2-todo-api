const {
  ObjectID
} = require('mongodb');
const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

const id = '5b5a51e5444349082ce5ba9b';

if (!ObjectID.isValid(id)) {
  console.log('ID is not valid')
}
Todo.findByIdAndRemove(id).then((todo) => {

  console.log('todo removed: ', todo)
})