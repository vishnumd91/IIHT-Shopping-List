const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const cors = require('cors');

const mongoose = require('mongoose');

const CONNECTION_URL = 'mongodb+srv://vishnu:vishnu@cluster0.uo9sf.mongodb.net/<dbname>?retryWrites=true&w=majority';

app.use(cors());

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    mongoose.connection.once('open', () => {
        console.log('MongoDB Connected Succesfully');
    })
)

