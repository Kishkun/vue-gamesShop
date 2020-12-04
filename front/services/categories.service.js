import {request} from './generic.service'

export const getCategory = async (id) => request({
  url: `/categories/${id}`,
  method: 'get'
})

export const getCategories = async (id) => request({
  url: '/categories',
  method: 'get'
})

