/**
 * Created by ilyapolyakov on 1/8/17.
 */
import {Router} from 'express';

import authController from './auth'

const router = Router();

//import other controllers
router.use('/auth', authController);

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

export default router;