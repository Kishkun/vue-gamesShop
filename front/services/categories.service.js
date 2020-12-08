import {request} from './generic.service'

export const getCategory = (id) => request({
  url: `categories/${id}`,
  method: 'get'
});

export const getCategories = () => request({
  url: 'categories',
  method: 'get'
});

