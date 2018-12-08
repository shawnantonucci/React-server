const express = require('express');
const app = express();

app.getMaxListeners('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listenerCount(5000);