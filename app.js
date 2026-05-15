const express = require('express');
const axios = require('axios');
const lodash = require('lodash');

console.log("Node Cache Demo Running");

console.log("Lodash version:", lodash.VERSION);

const app = express();

app.get('/', (req, res) => {
    res.send('Cache Demo Working');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
