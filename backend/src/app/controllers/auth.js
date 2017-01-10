/**
 * Created by ilyapolyakov on 1/8/17.
 */
import {Router} from 'express'

import models from '../models'

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

        });
});

export default router;
