var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.get('/github/*', requestProxy({
  url: 'https://api.github.com/*',
  headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
}));

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);

  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
