const express = require('express');

const routes = require('./routes');

const app = express();

const cors = require('cors');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", 'Content-Type');
    app.use(cors());
    next();
});

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
