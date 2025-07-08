const { Router } = require('express');
const messages = require('./messages');
const newMsgRouter = Router();

newMsgRouter.get('/', (req, res) => {
  res.render('newMsg', { title: 'New Message' });
});

newMsgRouter.post('/', (req, res) => {
  const { user, title, message } = req.body;
  const added = new Date();

  if (!user || !message) {
    return res.status(400).send('User and text are required');
  }

  const id = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
  messages.push({ id, user, title, message, added });
  res.redirect('/');
});

module.exports = newMsgRouter;
