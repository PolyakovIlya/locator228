/**
 * Created by ilyapolyakov on 1/10/17.
 */
import {Router} from 'express'

import models from '../../models'

const router = Router();

router.get('/all', (req, res, next) => {
    models.User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/:id', (req, res, next) => {
    models.User.findById(req.params.id)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put('/:id', (req, res, next) => {
    models.User.update(req.body,
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
    models.User.destroy(
        {
            where: {
                id: req.params.id
            }
        })
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json(err);
        });
});

export default router;
