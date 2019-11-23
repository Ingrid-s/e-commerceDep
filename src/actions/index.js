import axios from 'axios';
import { PROXY_URL, URL_API } from '../constants';
//const respuesta = await axios.get('http://e-moms-api.now.sh/api/products');
export const fetchProducts = () => (dispatch) => {
  axios.get(`${PROXY_URL}${URL_API}`).then((res) => {
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: res.data.data,
    });
  });
};

//Agregar al carrito de compras
export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

// elimar del carrito de compras
export const deleteProduct = (payload) => ({
  type: 'DELETE_PRODUCT',
  payload,
});

// aumenta la cantidad de productos en shopping-cart
export const plusQuantity = (payload) => ({
  type: 'PLUS_QUANTITY',
  payload,
});

// dismunuye la cantidad de productos en shopping-cart
export const minusQuantity = (payload) => ({
  type: 'MINUS_QUANTITY',
  payload,
});

// aqui comienza lista de deseos
//agregar a  lista de deseos
export const addToWishes = (payload) => ({
  type: 'ADD_TO_WISHES',
  payload,
});

// elimar del carrito de lista de deseos
export const deleteProductWishes = (payload) => ({
  type: 'DELETE_PRODUCT_WISHES',
  payload,
});

// aumenta la cantidad de productos en lista de deseos
export const plusQuantityWishes = (payload) => ({
  type: 'PLUS_QUANTITY_WISHES',
  payload,
});

// dismunuye la cantidad de productos en lista de deseos
export const minusQuantityWishes = (payload) => ({
  type: 'MINUS_QUANTITY_WISHES',
  payload,
});

// Elimina elementos a la lista de deseos
export const removeToWishes = (payload) => ({
  type: 'REMOVE_TO_WISHES',
  payload,
});

//Implementación del login

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const loginUser = ({ email, password }, redirecUrl) => {
  return (dispatch) => {
    const URL_API = 'https://e-moms-api.now.sh/api/auth/sign-in';
    const PROXY_URL = 'https://obscure-citadel-86298.herokuapp.com/';
    axios({
      url: `${PROXY_URL}${URL_API}`,
      method: 'post',
      auth: {
        username: email,
        password,
      },
      data: {
        'apiKeyToken': '674982815eb94e7ddd3d40bd51842e90533a774767ff79899fc08cce848cca6b',
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        document.cookie = `image=${data.user.imageProfile}`;
        dispatch(loginRequest(data));
      })
      .then(() => {
        window.location.href = redirecUrl;
      });
  };
};

