const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT =  5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//routes
const authroutes = require('./routes/authroutes');

app.use('/api/auth', authroutes);

//mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://newuser:newuser@cluster0.ugr89.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    app.get('/', (req,res)=>{
        res.send('<h1>this is server rninning</h1>')
    })
    