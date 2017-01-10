/**
 * Created by ilyapolyakov on 1/10/17.
 */
import {Router} from 'express'

import models from '../models'

const router = Router();

router.get('/all', (req, res, next) => {
    models.FishType.findAll()
        .then(fish => {
            res.json(fish);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/:id', (req, res, next) => {
    models.FishType.findById(req.params.id)
        .then(fish => {
            res.json(fish);
        })
        .catch(err => {
            res.json(err);
        });
});

export default router;