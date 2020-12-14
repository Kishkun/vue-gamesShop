const dotenv = require('dotenv');
const result = dotenv.config();

const jwt = require('jsonwebtoken');
const {User, Token} = require('../model');

const logout = async ({body: {refreshToken}, res}) => {
  const foundToken = await Token.findOne({token: refreshToken});
  if (!foundToken) {
    res.status(403).send({message: 'Извините! Пользователь не авторизован!'})
  }

  await Token.findByIdAndDelete(foundToken._id);

  return res.status(200).send({message: 'Круто! Вы разлогинены!'})
};

const refreshToken = async ({body: {refreshToken}, res}) => {
  if (!refreshToken) {
    res.status(403).send({message: 'Извините! Действие запрещенно!'})
  }

  const currentToken = await Token.findOne({token: refreshToken});
  if (!currentToken) {
    res.status(403).send({message: 'Извините! Действие запрещенно!'})
  }

  if (result.error) {
    throw result.error
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH, (err, user) => {
    if (err) {
      return res.status(403).send({message: 'Извините! Действие запрещенно!'});
    }

    const accessToken = jwt.sign({
      userId: user._id,
      email: user.email
    }, process.env.JWT_SECRET, {
      expiresIn: '1m'
    });

    return res.status(200).send({
      accessToken,
      email: user.email,
      message: 'Круто! Вы прошли верификацию!'
    })
  })
};

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
    }, process.env.JWT_SECRET, {
      expiresIn: '1m'
    });

    const refreshToken = jwt.sign({
      userId: foundUser._id,
      email: foundUser.email
    }, process.env.JWT_SECRET_REFRESH);

    const foundToken = await Token.findOne({
      user: foundUser._id
    });
    if (foundToken) {
      await Token.findByIdAndUpdate(foundToken._id, {token: refreshToken});
      return res.status(200).send({
        accessToken,
        refreshToken,
        email: foundUser.email,
        message: 'Круто! Вы прошли авторизацию!'
      })
    }

    const item = new Token({token: refreshToken, user: foundUser._id});
    await item.save();

    return res.status(200).send({
      accessToken,
      refreshToken,
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
  signUp,
  refreshToken,
  logout
};
