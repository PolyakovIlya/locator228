/**
 * Created by ilyapolyakov on 1/6/17.
 */
import models from '../models'
import jwt from 'jsonwebtoken'
import config from '../../config/config'

export default (req, res, next) => {
    let token = req.body.token || req.params('token') || req.headers['x-access-token'];
    console.log(token);
    // decode token
    if(token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
    next();
};