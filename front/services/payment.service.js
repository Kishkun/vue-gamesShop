import {request} from './generic.service';

export const getPaymentIntent = (data) => request({
  url: 'payment',
  method: 'post',
  data
});
