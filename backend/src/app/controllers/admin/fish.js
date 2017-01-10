/**
 * Created by ilyapolyakov on 1/10/17.
 */
import {Router} from 'express'

import models from '../../models'

const router = Router();

router.post('/add', (req, res, next) => {
    models.FishType.create(req.body)
        .then(fish => {
            res.json(fish);
        })
        .catch(err => {
            res.json(err);
        })
});

router.put('/:id', (req, res, next) => {
    models.FishType.update(req.body,
        {
            where: {
                id: req.params.id
            }
        })
        .then(affectedRows => {
            res.json(affectedRows);
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete('/:id', (req, res, next) => {
    models.FishType.destroy(
        {
            where: {
                id: req.params.id
            }
        })
        .then(fish => {
            res.json(fish);
        })
        .catch(err => {
            res.json(err);
        });
});

export default router;