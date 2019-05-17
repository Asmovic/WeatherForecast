const express = require('express'),
    path = require('path'),
    PORT = process.env.PORT || 8080,
    app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT);
console.log('server started');
