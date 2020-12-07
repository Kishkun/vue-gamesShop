import axios from 'axios'

const URL_API = 'http://localhost:3000/api/v1';

export const request = async ({ url, method, data = {}}) => {
  return await axios[method](`${URL_API}/${url}`, data)
}
