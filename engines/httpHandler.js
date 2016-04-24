function httpHandler(err, res, content) {
  if (err) {
    respondWithError(res, err);
  } else {
    respondWithContent(res, content);
  }
}

function respondWithError(res, err) {
  res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Error: ${err.message}`);
}

function respondWithContent(res, content) {
  const headers = { 'Content-Type': content.type };

  if (content.nocache) {
    headers['Cache-Control'] = 'no-cache';
  }

  if (content.cache) {
    headers['Cache-Control'] = 'max-age=31536000';
  }

  res.writeHead(200, headers);
  res.end(content.response);
}

module.exports = httpHandler;
