const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/send-message-iv2';

// cria um objeto de conexões com o banco
process.connection = mongoose.createConnection(databaseUrl, {
	useNewUrlParser: true
});

const app = express();

const contactRouter = require('./api/v1/routes/ContactRoutes');
const frontEndVersionRouter = require('./api/v1/routes/FrontEndVersionRoutes');

// Add headers
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/contact', contactRouter);
app.use('/api/v1/frontEndVersion', frontEndVersionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500).json({ error: true, message: err.message, stack: err.stack });
});

module.exports = app;
