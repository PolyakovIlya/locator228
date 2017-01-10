/**
 * Created by ilyapolyakov on 1/10/17.
 */
/**
 * Created by ilyapolyakov on 1/10/17.
 */
import {Router} from 'express'

import models from '../../models'

const router = Router();

router.post('/addZone', (req, res, next) => {
    models.Zone.create(req.body)
        .then(zone => {
            res.json(zone);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put('/:id', (req, res, next) => {
    models.Zone.update(
        req.body,
        {
            where: {
                id: req.params.id
            }
        }
        ).then(affectedRows => {
            res.json(affectedRows);
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete('/:id', (req, res, next) => {
    models.Zone.destroy(
        {
            where: {
                id: req.params.id
            }
        })
        .then(zone => {
            res.json(zone);
        })
        .catch(err => {
            res.json(err);
        });
});

export default router;
