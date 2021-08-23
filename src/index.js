const express = require('express');
var cors = require('cors');
const app =  express();
const morgan = require('morgan');


app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Settings
app.set('port', process.env.PORT || 3000);

app.get('/',cors(),(req, res, next) => {
    res.json({ mensaje: 'Listo' })   
});


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));//data forms
app.use(express.json());

//Routes
app.use('/api/weathers',cors(),require('./routes/weathers'))


//app.use('/api/weathers',require('./routes/weathers'))

// //Starting server
app.listen(app.get('port'), ()=> {
    console.log('Server on port ${3000}');
});