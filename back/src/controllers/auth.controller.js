const dotenv = require('dotenv');
const result = dotenv.config();

const jwt = require('jsonwebtoken');
const {User} = require('../model');

const login = async ({body: {email, password}}, res) => {
  try {
    const foundUser = await User.findOne({email});
    if (!foundUser) {
      res.status(403).send({message: 'Извините! Но логин или пароль не подходят!'})
    }

    const isPasswordCorrect = foundUser.password === password;
    if (!isPasswordCorrect) {
      res.status(403).send({message: 'Извините! Но логин или пароль не подходят!'})
    }

    if (result.error) {
      throw result.error
    }

    const accessToken = jwt.sign({
      userId: foundUser._id,
      email: foundUser.email
    }, process.env.JWT_SECRET);

    return res.status(200).send({
      accessToken,
      email: foundUser.email,
      message: 'Круто! Вы прошли авторизацию!'
    })
  } catch (err) {
    res.status(403).send({
      message: 'Извините! Но логин или пароль не подходят!',
      err
    })
  }
};

const signUp = async ({body: {email, password}, res}) => {
  try {
    const foundUser = await User.findOne({email});
    if (foundUser) {
      res.status(403).send({message: 'Извините! Данный email занят!'})
      throw new Error()
    }

    const createdUser = await new User({email, password});
    await createdUser.save();

    return res.status(200).send({message: 'Круто! Вы прошли регистрацию!'})
  } catch (err) {
    res.status(403).send({
      message: 'Извините! Вы не зарегистрировались!',
      err
    })
  }
};

module.exports = {
  login,
  signUp
};
