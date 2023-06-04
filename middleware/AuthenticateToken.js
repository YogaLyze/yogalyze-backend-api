import app from '../config/firebase-config.js';

export const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    console.log(app)
    const decodeValue = await app.auth().verifyIdToken(token);
    if (decodeValue) {
      console.log(decodeValue);
      req.user = decodeValue;
      return next();
    }
    return res.json({ message: 'Unauthorized' });
  } catch (e) {
    return res.json({ message: 'Internal Error' });
  }
};
