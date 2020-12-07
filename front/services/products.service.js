import {request} from './generic.service';

export const getProduct = id => request({
  url: `products/${id}`,
  method: 'get'
});

export const getProducts = () => request({
  url: `products`,
  method: 'get'
});
