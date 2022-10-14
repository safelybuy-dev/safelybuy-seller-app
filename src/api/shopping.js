import { axiosWithAuth } from 'auth';
import { baseUrl } from '.';

export const getMainDashboard = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getShoppingDashboard = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/shopping`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getShoppingOrders = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/report/shop-orders`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getShoppingItems = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/items`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const acceptOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/accept/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const denyOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/deny/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const shipOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/ship/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const deliverOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/deliver/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const returnOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/return/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const approveItem = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/item/approve/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const denyItem = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/item/deny/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const deleteItem = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/item/delete/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const selloutItem = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/item/sellout/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getAllMealClass = () => {
  return axiosWithAuth().get(
    `${baseUrl}/api/v1/admin/menu-class?per_page=10000000000000000`
  );
};

export const markMenuSoldOut = (success, failure, data) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/menus/mark-sold-out`, data)
    .then((response) => success(response.data))
    .catch((error) => failure(error));
};
