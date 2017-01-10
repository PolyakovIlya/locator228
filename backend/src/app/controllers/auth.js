/**
 * Created by ilyapolyakov on 1/8/17.
 */
import {Router} from 'express'

import models from '../models'
import logger from '../../app/helpers/logger'

const router = Router();

router.get('/', (req, res, next) => {
    res.json('respond with a resource auth');
});

router.get('/users', (req, res, next) => {
    models.User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post('/addUser', (req, res, next) => {
    console.log(req.body);
    models.User.create(req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json(err);
        });
});

export default router;
