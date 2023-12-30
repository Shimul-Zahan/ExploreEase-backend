const express = require('express');
const app = express();
const middleware = require('./src/middleware/middleware');
const port = process.env.PORT || 5000;
require('dotenv').config();

middleware(app);



app.get('/health', (req, res) => {
    res.send('Server running well')
})

app.listen(port, () => {
    console.log(`Server running at localhost: ${port}`);
})