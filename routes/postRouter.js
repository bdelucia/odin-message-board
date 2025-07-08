const { Router } = require('express');
const messages = require('./messages');
const postRouter = Router();

postRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const message = messages.find((msg) => msg.id === id);

  if (!message) {
    return res.status(404).send('Message not found');
  }

  res.render('post', { title: message.title, message });
});

module.exports = postRouter;
