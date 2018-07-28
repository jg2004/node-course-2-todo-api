//Had to create a free "sandbox" account with mlab. Set up a db user with user: jerry, pw:springer10 and use uri mlab provided. stored this uri into mLabUri variable to connect to mongodb database
//const mLabUri = 'mongodb://jerry:springer10@ds029117.mlab.com:29117/todoapp';
// had to set process.env.MONGODB_URI manually through heroku in CLI. That way if running on heroku it connects to mlab, otherwise if running locally ti connect to localhost database on local computer

const mongoose = require('mongoose')
const localHost = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(process.env.MONGODB_URI||localHost, {
  useNewUrlParser: true
})

module.exports = {
  mongoose
};