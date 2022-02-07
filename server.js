var express = require('express');
require('dotenv').config();

const {
    postgraphile
} = require("postgraphile");

var app = express();
app.use(
    postgraphile(
        process.env.POSTGRES_URL,
        "public", {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
        }
    )
);
app.listen(4000, () => console.log('head to http://localhost:4000/graphiql for playground'))
