const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    id: Number,
    sender: {type: String, required: true},
    message: {type: String, required: true},

});

//anders veranderen naar res.json
const Message = mongoose.model('message', messageSchema);

module.exports = Message;