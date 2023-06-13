const express = require('express');
const port = 8000;
const router = require('./routes');


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(router);


app.listen(port, () => {
    console.log('server is up and running on', port);
})