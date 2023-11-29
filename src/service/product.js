import { deleteRequest, getRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getProduct = async (params, successCallback, errorCallback) => {
  await getRequest(apiPath.product, params, successCallback, errorCallback);
};

export const getProductNew = async (params, successCallback, errorCallback) => {
  await getRequest(apiPath.productNew, params, successCallback, errorCallback);
};

export const getProductByCate = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(apiPath.productCate, params, successCallback, errorCallback);
};

export const getProductDetail = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(
    `${apiPath.product}/${params.id}`,
    params,
    successCallback,
    errorCallback
  );
};

export const searchProduct = async (params, successCallback, errorCallback) => {
  await getRequest(apiPath.search, params, successCallback, errorCallback);
};

export const getAllProduct = async (params, successCallback, errorCallback) => {
  await getRequest(apiPath.getAll, params, successCallback, errorCallback);
};

export const deleteProduct = async (params, successCallback, errorCallback) => {
  await deleteRequest(
    `${apiPath.product}/${params.id}`,
    params,
    successCallback,
    errorCallback
  );
};