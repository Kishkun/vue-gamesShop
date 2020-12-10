const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  requireTLS: true,
  auth: {
    user: 'testAccount.user', // generated ethereal user
    pass: 'testAccount.pass', // generated ethereal password
  },
});

const createUserConfirmationOrderEmail = async ({email: {email}, adminEmail = 'testtesttest@gmail.com'}) => {

  // send mail with defined transport object
  return await transporter.sendMail({
    from: `test from <${adminEmail}>`, // sender address
    to: `${email}`, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world from admin', // plain text body
    html: `
        <ul class="list-group">
            <li class="list-group-item"> Last of Us 2 - 49$ </li>
            <li class="list-group-item"> Control - 49$ </li>
        </ul>
    `, // html body
  })
};

const createAdminConfirmationOrderEmail = async ({_id, fullName, address, phone}, adminEmail = 'testtesttest@gmail.com',) => {

  // send mail with defined transport object
  return await transporter.sendMail({
    from: `test from <${adminEmail}>`, // sender address
    to: `${adminEmail}`, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world from user', // plain text body
    html: `
        <h2>Новый заказ с номером ${_id}</h2>
        <ul class="list-group">
            <li class="list-group-item"> Имя: ${fullName} </li>
            <li class="list-group-item"> Адресс: ${address} </li>
            <li class="list-group-item"> Телефон: ${phone} </li>
        </ul>
    `, // html body
  });
};

module.exports = {
  createUserConfirmationOrderEmail,
  createAdminConfirmationOrderEmail
};
