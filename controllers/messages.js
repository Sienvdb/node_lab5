// require models
const Message = require("../models/message");

const getAll = (req, res) => {
    Message.find({}, (err, messages) => {
        if (err) { 
            console.log(err)
            let response = {
                status: "error",
                message: "Error creating topping"
            }
            res.json(response);
        }
        let response = {
            status: "success",
            message: "GETTING messages",
            data: messages
        }
        res.json(response);
    });
};

const getMessageById = (req, res) => {
    const messageId = req.params.id;
    Message.find({_id: messageId}, (err, message) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "This message isn't found"
                }
                res.json(response);
            }
            let response = {
                status: "success",
                message: "GETTING messages " + req.params.id,
                data: message
            }
            res.json(response);
            }
    )};

const createMessage = (req, res) => {
    let sender = req.body.sender;
    let message = req.body.message;

    let newMessage = new Message(req.body);
    newMessage.sender = sender;
    newMessage.message = message;
    newMessage.save((err, message) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "Error creating message"
                }
                res.json(response);
            }
            let response = {
                status: "success",
                message: "Message created",
                data: message
             }
            res.json(response);
            });
        };

const changeMessage = (req, res) => {
    const messageId = req.params.id;
    Message.find({_id: messageId}, (err, message) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "This message isn't found so can't be updated"
                }
                res.json(response);
            }
            console.log("ok");
            let response = {
                status: "success",
                message: "UPDATING a message with id " + req.params.id,
                data: message
            }
            res.json(response);
            }
    )};

const deleteMessage = (req, res) => {
    const messageId = req.params.id;
    Message.remove({_id: messageId}, (err, message) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "This message isn't found so can't be removed"
                }
                res.json(response);
            }
            console.log("ok");
            let response = {
                status: "success",
                message: "REMOVING a message with id " + req.params.id,
                
            }
            res.json(response);
            }
    )};

const getMessageBySender = (req, res) => {
    const sender = req.params.sender;
    Message.find({sender: sender}, (err, message) => {
        if (err) {
            console.log(err)
            let response = {
                status: "error",
                message: "This message isn't found"
                }
                res.json(response);
            }
            let response = {
                status: "success",
                message: "GETTING messages " + sender,
                data: message
            }
            res.json(response);
            }
    )};

module.exports.getAll = getAll;
module.exports.getMessageById = getMessageById;
module.exports.createMessage = createMessage;
module.exports.changeMessage = changeMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.getMessageBySender = getMessageBySender;