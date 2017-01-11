/**
 * Created by ilyapolyakov on 1/8/17.
 */
import {Router} from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import models from '../models'
import config from '../../config/config'
import logger from '../../app/helpers/logger'

const router = Router();

const saltRounds = 10;

router.get('/', (req, res, next) => {
    res.json('respond with a resource auth');
});

router.post('/login', (req, res, next) => {
    let username = req.body.username,
        password = req.body.password;

    models.User.findOne(
        {
            where: {
                username: username
            }
        })
        .then(user => {
            //compare bcrypt password
            bcrypt.compare(password, user.password)
                .then(result => {
                    if(result) {
                        res.json(result);
                    } else {
                        res.json(result);
                    }
                });
        })
        .catch(err => {
            res.json(err);
        })
});

router.post('/register', (req, res, next) => {

    console.log(req.body);
    bcrypt.hash(req.body.password, saltRounds).then(hash => {
        //store hash in password DB
        models.User.create(
            {
                username: req.body.username,
                password: hash,
                email: req.body.email,
                role: 'user'
            })
            .then(user => {
                let token = jwt.sign(user, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                console.log(token);
                res.json({
                    token: token
                });
            })
            .catch(err => {
                res.json(err);
            });
    });

});

export default router;
