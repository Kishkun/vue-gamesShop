const stripe = require('stripe')(process.env.STRIPE_KEY_TEST);
const dollarsToCents = require('dollars-to-cents');

const createPaymentIntent = async ({body: {amount}}, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: dollarsToCents(amount),
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return res.status(200).send(paymentIntent)
  } catch (err) {
    res.status(500).send(err)
  }
};

const stripeWebHook = async ({body}, res) => {
  try {

  } catch (err) {
    console.log(err)
  }
};

module.exports = {
  createPaymentIntent,
  stripeWebHook
};
