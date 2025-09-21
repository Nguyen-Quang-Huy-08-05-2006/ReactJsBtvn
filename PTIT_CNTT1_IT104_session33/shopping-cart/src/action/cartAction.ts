import type { Product } from "../reducer";

export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (product: Product, quantity: number) => ({
  type: ADD_TO_CART,
  payload: { product, quantity },
});

export const deleteFromCart = (id: number) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});

export const updateQuantity = (id: number, quantity: number) => ({
  type: "UPDATE_QUANTITY",
  payload: { id, quantity },
});


export const clearCart = () => ({
  type: CLEAR_CART,
});
