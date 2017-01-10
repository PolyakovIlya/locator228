/**
 * Created by ilyapolyakov on 1/8/17.
 */
import {Router} from 'express';
import models from '../models'

import authController from './auth'
import zoneController from './zone'
import fishController from './fish'

//admin imports
import zoneAdminController from './admin/zone'
import userAdminController from './admin/user'
import fishAdminController from './admin/fish'

const router = Router();

//import other controllers
router.use('/auth', authController);
router.use('/zone', zoneController);
router.use('/fish', fishController);

//import admin controllers
router.use('/admin/user', userAdminController);
router.use('/admin/zone', zoneAdminController);
router.use('/admin/fish', fishAdminController);

router.get('/', (req, res, next) => {
    console.log('index');
    res.json('228');
});

export default router;