/**
 * Created by ilyapolyakov on 1/6/17.
 */
import models from '../models'
// import {User} from '../models/user'

export default (req, res, next) => {
    // models.User.findOne({
    //     where: {username: req.body.username}
    // }).then((user) => {
    //     console.log('cb');
    //     next();
    // });
    next();
};