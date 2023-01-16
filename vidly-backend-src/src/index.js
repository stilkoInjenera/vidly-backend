const Joi = require("joi");
const express = require("express");
const app = express();

// router
const routerGenres = require('./routes/genres')

app.use(express.json());

// api router - middleware
app.use('/api/genres', routerGenres);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
