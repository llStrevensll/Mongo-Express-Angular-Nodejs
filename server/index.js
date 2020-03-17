const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
//BD
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev')); //morgan Ej: GET / 404 3.070 ms - 139
app.use(express.json()); //procesar json
app.use(cors({ origin: 'http://localhost:4200' }));

//Routes
//api/employees -> prefijo
app.use('/api/employees', require('./routes/employee.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));

})