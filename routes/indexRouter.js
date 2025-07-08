const { Router } = require('express');
const messages = require('./messages');
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.render('index', { title: "Bobbeh's Message Board", messages: messages });
});

module.exports = indexRouter;
