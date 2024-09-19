const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const { url } = req;
  const filePath = process.argv[2];
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    if (filePath !== null) {
      res.write('This is the list of our students\n');
      try {
        countStudents(filePath).then((data) => {
          const str = data.join('\n');
          res.end(str);
        });
      } catch (error) {
        res.end('Cannot load the database');
      }
    }
  } else {
    res.write('Not Found');
    res.end();
  }
});

app.listen(1245);

module.exports = app;
