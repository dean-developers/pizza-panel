const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + "/dist"));

app.get('/*', function(req, res) {
	res.render('index');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Listening on port ' + port)
});
