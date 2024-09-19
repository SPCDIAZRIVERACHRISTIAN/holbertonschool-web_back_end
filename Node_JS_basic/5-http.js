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
    res.write('This is the list of our students\n');
      countStudents(filePath).then((data) => {
        const str = data.join('\n');
        // console.log(str);
        res.end(str);
    }
    );
    //   res.write(data);
    // res.end(str);
}else {
    // res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('Not Found');
    res.end();
  }
});

app.listen(1245);

module.exports = app;
