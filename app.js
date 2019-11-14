const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

// CORS
app.use(cors());

// Routes
app.use('*', require('./routes/proxy.js'));

// Starting the App
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
