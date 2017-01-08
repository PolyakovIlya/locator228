/**
 * Created by ilyapolyakov on 1/8/17.
 */
import {Router} from 'express'

const router = Router();

router.get('/', (req, res, next) => {
    res.send('respond with a resource auth');
});

export default router;
