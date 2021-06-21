import axios from 'axios';

const patterns = {
  email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:]|])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:)+)\])/,
  password: /[^\n]+/,
  cpassword: /[^\n]+/,
  firstName: /^[a-zA-z'_.-]{2,}$/,
  lastName: /^[a-zA-z'_.-]{2,}$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
  role: /[^\n]+/,
  photo: /[^\n]+/,
  payment_level: /^[0-9]$/,
  name: /[^\n]{2,}/,
  description: /[^\n]{2,}/,
  type: /[^\n]{2,}/,
  course: /[^\n]{2,}/,
  category: /[^\n]{2,}/,
  subCategory: /[^\n]{2,}/,
  unit: /[^\n]{2,}/,
  unitPrice: /^[0-9,]+$/,
  amount: /^[0-9,]+$/,
  base_amount: /^[0-9,]+$/,
  startDate: /^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/,
  endDate: /^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/,
  foods: /[^\n]+/,
  date: /[^\n]+/,
  staff_id: /[^\n]{2,}/,
  department: /[^\n]{2,}/,
  company: /[^\n]{2,}/,
};

export const getMonthFromString = (mon) => {
  return (
    new Date(Date.parse(mon + ` 1, ${new Date().getFullYear()}`)).getMonth() + 1
  );
};
export const validate = (field, Regex) => {
  if (patterns[Regex].test(field)) return true;
  return false;
};

export const validateInput = (event) =>
  validate(event.target.value, event.target.attributes.name.value);

export const randomInt = (length) => Math.floor(Math.random() * (length - 1));

export const baseURL = 'https://safelybuy-api.herokuapp.com/api/v1/seller';

export const axiosInstance = axios.create({
  baseURL,
  timeout: 0,
});

export const requests = {
  get: async (url) => {
    try {
      const response = await axiosInstance.get(`${url}`);
      return response.data;
    } catch (e) {
      throw e;
    }
  },

  post: async (url, body, cancel) => {
    try {
      const response = await axiosInstance.post(`${url}`, body, cancel);
      return response.data;
    } catch (e) {
      throw e;
    }
  },

  formDataPost: async (url, body) => {
    try {
      const response = await axiosInstance.post({
        url,
        data: body,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  },
};

export const NULL_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbMtMaRx27Qw_9XY1mmNhZmA9sPy6SiKwzkA&usqp=CAU';

export const stringSearch = (val, string) => {
  return string && string.toLowerCase().search(val.toLowerCase()) !== -1;
};

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
