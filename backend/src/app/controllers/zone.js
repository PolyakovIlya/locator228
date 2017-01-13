/**
 * Created by ilyapolyakov on 1/10/17.
 */
import {Router} from 'express'

import models from '../models'
import logger from '../../app/helpers/logger'

const router = Router();

router.get('/', (req, res, next) => {
    models.Zone.findAll()
        .then(zones => {
            console.log(zones);
            res.json(zones);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/:id', (req, res, next) => {
    models.Zone.findById(req.params.id)
        .then(zone => {
            res.json(zone);
        })
        .catch(err => {
            res.json(err);
        });
});

export default router;
