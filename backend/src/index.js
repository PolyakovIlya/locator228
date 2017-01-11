/**
 * Created by ilyapolyakov on 12/25/16.
 */

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import middlewares from './app/middlewares'
import controllers from './app/controllers'
import models from './app/models'

import config from './config/config'
import logger from './app/helpers/logger'

const app = express();
app.set('view engine', 'jade');
app.set('views', path.join(config.root, 'app/views'));
app.use(express.static(path.join(config.root, 'static')));

//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compress());
app.use(cookieParser());
app.use(helmet());
app.use((req, res, next) => {
    let token = req.body.token || req.params('token') || req.headers['x-access-token'];
    console.log(token);
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
    next();
});

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
    res.send({
        status: sc,
        message: err.message,
        stack: config.env === 'development' ? err.stack : ''
    });
});

const server = app.listen(config.port, () => {
    logger.info(`listening on port ${config.port}`);
});

process.on('SIGINT', () => {
    logger.info('shutting down!');
    server.close();
    process.exit();
});