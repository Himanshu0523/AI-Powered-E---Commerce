const jwt = require("jsonwebtoken");

/*
AUTHENTICATION MIDDLEWARE
Protect routes using JWT
*/

exports.authenticate = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized. Token missing"
    });
  }

  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      message: "Invalid or expired token"
    });

  }

};


/*
ROLE BASED AUTHORIZATION
Example: admin-only routes
*/

exports.authorize = (...roles) => {

  return (req, res, next) => {

    if (!req.user || !roles.includes(req.user.role)) {

      return res.status(403).json({
        message: "Access forbidden"
      });

    }

    next();

  };

};