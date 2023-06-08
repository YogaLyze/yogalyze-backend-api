import app from '../config/firebase-config.js';

export const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decodeValue = await app.auth().verifyIdToken(token);
    if (decodeValue) {
      req.user = decodeValue;
      return next();
    }
    return res.status(401).json({ status: 'Unauthorized' });
  } catch (e) {
    return res.status(500).json({ status: 'Internal Error', msg: e.message });
  }
};
