import {
  postRequest,
} from "../api/apiCaller";
import { apiPath } from "../config/apiPath";

export const postOrder = async (params, successCallback, errorCallback) => {
  await postRequest(apiPath.Order, params, successCallback, errorCallback);
};
