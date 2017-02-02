/**
 * Created by ilyapolyakov on 1/8/17.
 */

import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import Sequelize from 'sequelize'

import config from '../../config/config'
import logger from '../helpers/logger'

import './user';

// POSTGRES SET-UP
// warn if POSTGRES is being used and pass is undefined
if (config.dbname === process.env.POSTGRESURI && !config.pass)
    logger.warn(`bad credientials for ${config.dbname} -- check env.`);

const sequelize = new Sequelize(
    'postgres://'
    + config.user //+':'
    + config.pass //+'@'
    + config.dburi +'/'
    + config.dbname
);

sequelize
    .authenticate()
    .then(err => {
        logger.info('Connection has been established successfully.');
    })
    .catch(err => {
        logger.warn('Unable to connect to the database: ', err);
    });

let db = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(file => {
        let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

_.keys(db).forEach(modelName => {
    if('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

sequelize
    .sync()
    .then(function() {
        logger.info('success sync');
    }, function(err) {
        logger.warn('error sync: ', err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;


