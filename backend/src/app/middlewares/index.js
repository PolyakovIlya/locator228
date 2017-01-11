/**
 * Created by ilyapolyakov on 1/11/17.
 */
import {Router} from 'express';
import checkAuthToken from './auth-token'

const router = Router();

router.use(checkAuthToken);

export default router;

