const mongoose = require('mongoose')

const mLabUri = 'mongodb://<jerry>:<springer10>@ds029117.mlab.com:29117/todoapp';
mongoose.connect(mLabUri || 'mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
})

module.exports = {
  mongoose
};