/**
 * Created by ilyapolyakov on 1/8/17.
 */
import winston from 'winston';

export default new window.Logger({
    transports: [
        new winston.transports.Console({
            level: (process.env.NODE_ENV === 'production') ? 'info' : 'debug',
            timestamp: true,
            stderrLevels: ['error'],
            colorize: true
        })
    ]
});