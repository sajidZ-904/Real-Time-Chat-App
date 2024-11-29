const jwt = require('jwt-simple');
const { JWT_SECRET } = require('../config/jwtConfig');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  
  if (!token) return res.status(401).send('Access Denied');
  
  try {
    const decoded = jwt.decode(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = authenticateToken;
