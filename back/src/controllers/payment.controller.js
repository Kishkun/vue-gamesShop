const stripe = require('stripe')(process.env.STRIPE_KEY_TEST);
const dollarsToCents = require('dollars-to-cents');
const {Order} = require('../model');

const createPaymentIntent = async ({body: {address, fullName, phone, email, products}}, res) => {
  try {

    if (!address) {
      throw new Error('Адрес обязателен')
    }

    const amount = products.reduce((sum, item) => sum + Number(item.price), 0);
    const productsIds = products.map(product => product._id);
    const prepareOrder = {
      amount, address, fullName, phone, email, products: productsIds
    };

    const newOrder = await new Order(prepareOrder);
    const saveOrder = await newOrder.save();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: dollarsToCents(amount),
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: {
        orderId: String(saveOrder._id)
      }
    });

    return res.status(200).send({
      paymentIntent,
      saveOrder
    })
  } catch (err) {
    res.status(500).send(err)
  }
};

const stripeWebHook = async ({body}, res) => {
  try {
    console.log(body)
  } catch (err) {
    res.status(500).send(err)
  }
};

module.exports = {
  createPaymentIntent,
  stripeWebHook
};
