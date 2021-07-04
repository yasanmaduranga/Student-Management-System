const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    room:String,
    name:String, 
    message:String,
   // updated_at:{type: Date, default: Date.now}
}); 

module.exports = mongoose.model('Chat',ChatSchema ); 