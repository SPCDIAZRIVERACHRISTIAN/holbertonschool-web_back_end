const express = require('express');

const app = express();
const port = 1245;
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const filePath = process.argv[2];
app.get('/students', async (req, res) => {
  const message = 'This is the list of our students\n';
  try {
    const students = await countStudents(filePath);
    res.send(`${message}${students.join('\n')}`);
  } catch (err) {
    res.send(`${message}${err.message}`);
  }
});

app.listen(port);

module.exports = app;
