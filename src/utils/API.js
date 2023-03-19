import axios from 'axios';

export const API_GET_TOKEN = async () => {
  const { data } = await axios.get(
    'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions'
  );
  return data;
};

export const API_GET_COURSES = async token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  const { data } = await axios.get('https://api.wisey.app/api/v1/core/preview-courses');
  return data;
};

export const API_GET_ONE_COURSE = async (token, id) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  const { data } = await axios.get(`https://api.wisey.app/api/v1/core/preview-courses/${id}`);
  return data;
};
