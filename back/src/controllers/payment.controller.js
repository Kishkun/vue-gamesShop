const stripe = require('stripe')(process.env.STRIPE_KEY_TEST);
const dollarsToCents = require('dollars-to-cents');
const {Order} = require('../model');
const {
  createUserConfirmationOrderEmail,
  createAdminConfirmationOrderEmail
} = require('./mail.controller');

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
      saveOrder,
      message: 'Круто! Оплата убежала в базу!'
    })
  } catch (err) {
    res.status(500).send(err)
  }
};

const stripeWebHook = async ({ body: {data} }, res) => {
  try {
    const {metadata: {orderId}} = data.object;
    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error('Order not found')
    }
    console.log('order is',order)
    await Order.findByIdAndUpdate(orderId, { status: 'Paid' })
    await createUserConfirmationOrderEmail(order);
    await createAdminConfirmationOrderEmail(order);
    return res.status(200).send({success: true})
  } catch (err) {
    res.status(500).send(err)
  }
};

module.exports = {
  createPaymentIntent,
  stripeWebHook
};
