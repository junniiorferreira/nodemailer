const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://dt3root:hwcrICOFtR5XhRKM@dt3mongo-qisgg.mongodb.net/test');

mongoose.Promise = global.Promise;

module.exports = mongoose;