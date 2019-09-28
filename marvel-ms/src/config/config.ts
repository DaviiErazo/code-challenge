const env = require('dotenv/config');
 
module.exports = {
    PORT: process.env.PORT,
    SENTRY_URL: process.env.SENTRY_URL,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    MARVEL_URL: process.env.MARVEL_URL,
    TS: process.env.TS,
}