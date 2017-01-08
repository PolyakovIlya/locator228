/**
 * Created by ilyapolyakov on 12/25/16.
 */

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import * as checkAuthToken from './app/middlewares/auth-token'
import controllers from './app/controllers'
import logger from './app/helpers/logger'

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(compress());
app.use(cookieParser());
app.use(helmet());
app.use(checkAuthToken.default);

//set all controllers
app.use('/', controllers);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    const sc = err.status || 500;
    res.status(sc);
    res.render('error', {
        status: sc,
        message: err.message,
        stack: config.env === 'development' ? err.stack : ''
    });
});

http.createServer((req, res) => {

}).listen(1337, 'localhost');

// app.listen(1337);
console.log('Serving deals on localhost:1337');