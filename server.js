const express = require('express');
const cors = require('cors');
const apicache = require('apicache');
const mongoose = require('mongoose');
const { swaggerDocs: V1SwaggerDocs } = require("./swagger");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const cache = apicache.middleware;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established');
});

const sentencesRouter = require('./routes/sentences');
const wordsRouter = require('./routes/words');

app.use('/sentences', sentencesRouter);
app.use('/words', cache("2 minutes"), wordsRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
    V1SwaggerDocs(app, port);
});