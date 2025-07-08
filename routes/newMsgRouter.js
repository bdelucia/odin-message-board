const { Router } = require('express');
const newMsgRouter = Router();

newMsgRouter.get('/', (req, res) => {
  res.render('newMsg', { title: 'New Message' });
});

module.exports = newMsgRouter;
