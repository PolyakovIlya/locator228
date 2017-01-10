/**
 * Created by ilyapolyakov on 1/8/17.
 */
import {Router} from 'express';

import authController from './auth'
import models from '../models'

const router = Router();

//import other controllers
router.use('/auth', authController);

router.get('/', (req, res, next) => {
    console.log('index');
    res.json('228');
});

export default router;