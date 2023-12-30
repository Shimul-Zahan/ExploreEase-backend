const express = require('express');
const cors = require('cors');
// require('dotenv').config();

const middleware = (app) => {
    app.use(express.json());
    app.use(cors());
}

module.exports = middleware;