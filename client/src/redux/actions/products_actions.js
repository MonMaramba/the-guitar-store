import axios from "axios";
import {
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SELL,
  GET_BRANDS,
  ADD_BRAND,
  GET_WOODS,
  ADD_WOOD,
  GET_PRODUCTS_TO_SHOP,
  ADD_PRODUCT,
  CLEAR_PRODUCT,
  GET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL,
} from "./types";

import { PRODUCT_SERVER } from "../../components/utils/misc";

export function getProductDetail(id) {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
    .then((response) => {
      return response.data[0];
    });
  return {
    type: GET_PRODUCT_DETAIL,
    payload: request,
  };
}

export function clearProductDetail() {
  return {
    type: CLEAR_PRODUCT_DETAIL,
    payload: "",
  };
}

export function getProductsBySell() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then((response) => response.data);

  return {
    type: GET_PRODUCTS_BY_SELL,
    payload: request,
  };
}

export function getProductsByArrival() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then((response) => response.data);

  return {
    type: GET_PRODUCTS_BY_ARRIVAL,
    payload: request,
  };
}

// receiving the states and build an object to send to the server
export function getProductsToShop(skip, limit, filters = [], prevState = []) {
  const data = {
    skip,
    limit,
    filters,
  };
  // creating the request to the server
  const request = axios
    .post(`${PRODUCT_SERVER}/shop`, data)
    .then((response) => {
      // combining previous state and results from server and updating redux store
      let newState = [...prevState, ...response.data.articles];
      return {
        size: response.data.size,
        articles: newState,
      };
    });
  return {
    // this gets sent to the reducer
    type: GET_PRODUCTS_TO_SHOP,
    payload: request,
  };
}

export function addBrand(dataToSubmit, existingBrands) {
  const request = axios
    .post(`${PRODUCT_SERVER}/brand`, dataToSubmit)
    .then((response) => {
      let brands = [...existingBrands, response.data.brand];
      return { success: response.data.success, brands };
    });
  return {
    type: ADD_BRAND,
    payload: request,
  };
}

export function addWood(dataToSubmit, existingWoods) {
  const request = axios
    .post(`${PRODUCT_SERVER}/wood`, dataToSubmit)
    .then((response) => {
      let woods = [...existingWoods, response.data.wood];
      return { success: response.data.success, woods };
    });
  return {
    type: ADD_WOOD,
    payload: request,
  };
}

export function addProduct(dataToSubmit) {
  const request = axios
    .post(`${PRODUCT_SERVER}/article`, dataToSubmit)
    .then((response) => response.data);
  return {
    type: ADD_PRODUCT,
    payload: request,
  };
}

//clearing state after add_product has rendered
export function clearProduct() {
  return {
    type: CLEAR_PRODUCT,
    payload: "",
  };
}

//////////////////////////////////////////////////////
//////////         CATEGORIES            ////////////
//////////////////////////////////////////////////////

export function getBrands() {
  const request = axios
    .get(`${PRODUCT_SERVER}/brands`)
    .then((response) => response.data);

  return {
    type: GET_BRANDS,
    payload: request,
  };
}
export function getWoods() {
  const request = axios
    .get(`${PRODUCT_SERVER}/woods`)
    .then((response) => response.data);

  return {
    type: GET_WOODS,
    payload: request,
  };
}
