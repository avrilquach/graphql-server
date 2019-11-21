const express = require('express');

const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');

const mongoose = require('mongoose');

const app = express();

const cors = require('cors');

/* Allow cross-origin requests*/
app.use(cors());

/* Connect to Database mongodb */

const dbpath = "mongodb+srv://avrilquach:aSdf1@34@cluster-ebztz.mongodb.net/graphql?retryWrites=true&w=majority";

const mongo = mongoose.connect(dbpath, { useUnifiedTopology: true,useNewUrlParser: true });
mongo.then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.log('err', err);
});

/* Config Graphql run on Server */
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

/* Config port on Server */
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});