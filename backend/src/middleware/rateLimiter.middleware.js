const rateLimit = require("express-rate-limit");

/*
API Rate Limiter
*/

exports.apiLimiter = rateLimit({

  windowMs: 15 * 60 * 1000,

  max: 100,

  message: {
    message: "Too many requests, please try again later."
  }

});