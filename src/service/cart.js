import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getCart = async (params, successCallback, errorCallback) => {
  await getRequest(apiPath.cart, params, successCallback, errorCallback);
};
export const postCart = async (params, successCallback, errorCallback) => {
  await postRequest(apiPath.cart, params, successCallback, errorCallback);
};
export const deleteCart = async (params, successCallback, errorCallback) => {
  await deleteRequest(
    `${apiPath.cart}/${params.id}`,
    params,
    successCallback,
    errorCallback
  );
};
export const updateCart = async (params, successCallback, errorCallback) => {
  await putRequest(
    `${apiPath.cart}/${params.id}`,
    params,
    successCallback,
    errorCallback
  );
};
