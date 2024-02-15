import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6540e28145bedb25bfc2cdad.mockapi.io/',
});

export const requestCars = async (page = 1) => {
  const { data } = await instance.get(`/car?page=${page}&limit=12`);
  return data;
};
