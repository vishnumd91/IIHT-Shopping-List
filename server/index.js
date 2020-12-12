const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const cors = require('cors');

const mongoose = require('mongoose');

const itemRoutes = require('./routes/items');

const CONNECTION_URL = 'mongodb+srv://vishnu:vishnu@cluster0.uo9sf.mongodb.net/shopping-list?retryWrites=true&w=majority';

app.use(cors());

app.use(express.json());

app.use('/items', itemRoutes);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    mongoose.connection.once('open', () => {
        console.log('MongoDB Connected Succesfully');
    })
)

// app.get('/', (req,res) => res.send('<h1>Hello Guys</h1>'));

