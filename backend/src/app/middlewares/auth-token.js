/**
 * Created by ilyapolyakov on 1/6/17.
 */
import {User} from '../models/user'

export default (req, res, next) => {
    User.findOne({
        where: {username: req.body.username}
    }).then((user) => {
        next();
    });
};