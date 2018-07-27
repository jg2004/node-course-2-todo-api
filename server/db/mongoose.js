//Had to create a free "sandbox" account with mlab. Set up a db user with user: jerry, pw:springer10 and use uri mlab provided. stored this uri into mLabUri variable to connect to mongodb database

const mongoose = require('mongoose')

const mLabUri = 'mongodb://jerry:springer10@ds029117.mlab.com:29117/todoapp';
const localHost = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(mLabUri||localHost, {
  useNewUrlParser: true
})
// mongoose.connect('mongodb://localhost:27017/TodoApp', {
//   useNewUrlParser: true
// })
module.exports = {
  mongoose
};