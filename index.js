const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const newMsgRouter = require('./routes/newMsgRouter');
const assetsPath = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.set('view engine', 'ejs'); // Set the view engine to EJS

app.use(express.static(assetsPath)); // Serve static files from the public directory

app.use('/', indexRouter);
app.use('/new', newMsgRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
