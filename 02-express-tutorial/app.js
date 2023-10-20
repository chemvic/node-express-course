const express = require('express');
const app=express();


const authRouter = require('./routes/auth');
const peopleRouter = require('./routes/people');
app.use(express.static('methods-public'));

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use('/api/people',peopleRouter );
app.use('/login', authRouter);


app.listen(5000, ()=>{
    console.log('server is running on 5000 port...');
});

