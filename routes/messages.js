const express = require('express');
const router = express.Router();
const passport = require('passport');

const messagesController = require('../controllers/messages_controller');

router.get('/chats',passport.checkAuthentication,messagesController.userChats); //when user goes to chat option,that is clicks on
//chat icon
router.get('/chatroom',passport.checkAuthentication,messagesController.chatRoom); //when user goes to chat room with a friend 

module.exports = router;