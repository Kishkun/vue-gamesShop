const {verify} = require('jsonwebtoken');
const dotenv = require('dotenv');
const result = dotenv.config();

const checkJWTSign = (req, res, next) => {
  const {headers: {authorization}} = req;

  if (authorization) {
    const token = authorization.split(' ')[1];

    if (result.error) {
      throw result.error
    }

    verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.status(403).send({message: 'Извините! Вы не авторизованы!'});
        return next()
      }
    });
    return next()
  }

  return res.status(403).send({message: 'Извините! Вы не авторизованы!'})
};


module.exports = {checkJWTSign};
