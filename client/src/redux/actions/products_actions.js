import axios from "axios";
import {
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SELL,
  GET_BRANDS,
  GET_WOODS,
  GET_PRODUCTS_TO_SHOP
} from "./types";

import { PRODUCT_SERVER } from "../../components/utils/misc";

export function getProductsBySell() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then(response => response.data);

  return {
    type: GET_PRODUCTS_BY_SELL,
    payload: request
  };
}

export function getProductsByArrival() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);

  return {
    type: GET_PRODUCTS_BY_ARRIVAL,
    payload: request
  };
}

// receiving the states and build an object to send to the server
export function getProductsToShop(skip, limit, filters = [], prevState = []) {
  const data = {
    skip,
    limit,
    filters
  };
  // creating the request to the server
  const request = axios.post(`${PRODUCT_SERVER}/shop`, data).then(response => {
    // combining previous state and results from server and updating redux store
    let newState = [...prevState, ...response.data.articles];
    return {
      size: response.data.size,
      articles: newState
    };
  });
  return {
    // this gets sent to the reducer
    type: GET_PRODUCTS_TO_SHOP,
    payload: request
  };
}

//////////////////////////////////////////////////////
//////////         CATEGORIES            ////////////
//////////////////////////////////////////////////////

export function getBrands() {
  const request = axios
    .get(`${PRODUCT_SERVER}/brands`)
    .then(response => response.data);

  return {
    type: GET_BRANDS,
    payload: request
  };
}
export function getWoods() {
  const request = axios
    .get(`${PRODUCT_SERVER}/woods`)
    .then(response => response.data);

  return {
    type: GET_WOODS,
    payload: request
  };
}
