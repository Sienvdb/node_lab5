var express = require('express');
var router = express.Router();
const MessageController = require('../controllers/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Siens message API' });
});

/* GET messages. */
router.get('messages', MessageController.getAll);

/* GET messages by id */
router.get('messages/:id', MessageController.getMessageById);

/* GET messages by sender */
router.get('messages/sender/:sender', MessageController.getMessageBySender);

/* POST create a new message. */
router.post('/messages', MessageController.createMessage);

/* PUT change message. */
router.put('messages/:id', MessageController.changeMessage);

/* DELETE message by id */
router.delete('messages/:id', MessageController.deleteMessage);


module.exports = router;
