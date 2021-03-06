/**
 * Created by ilyapolyakov on 1/6/17.
 */
import path from 'path';

export default {
    // address of postegre
    dburi: process.env.POSTGRESURI || 'localhost:5432',
    dbname: 'postgres',
    user: process.env.DB_USER || '',
    pass: process.env.DB_PASS || '',

    // environment
    env: process.env.NODE_ENV || 'development',

    // port on which to listen
    port: process.env.PORT || 1337,

    // path to root directory of this app
    root: path.normalize(__dirname),

    //jwt token secret
    secret: 'locator228',
};