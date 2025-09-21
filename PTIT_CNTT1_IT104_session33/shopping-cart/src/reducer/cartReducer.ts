import type { CartItem, Product } from ".";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

type Action =
  | { type: "ADD_TO_CART"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" };

export const cartReducer = (state = initialState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
  const { product, quantity } = action.payload;
  const existing = state.items.find((i) => i.product.id === product.id);

  if (existing) {
    return {
      ...state,
      items: state.items.map((i) =>
        i.product.id === product.id
          ? { ...i, quantity: i.quantity + quantity }
          : i
      ),
    };
  }

  return {
    ...state,
    items: [...state.items, { product, quantity }],
  };
}


    case "REMOVE_FROM_CART":
  return {
    ...state,
    items: state.items.filter((i) => i.product.id !== action.payload),
  };

    case "UPDATE_QUANTITY":
  return {
    ...state,
    items: state.items.map((i) =>
      i.product.id === action.payload.id
        ? {
            ...i,
            quantity: Math.max(1, action.payload.quantity), 
          }
        : i
    ),
  };


    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
};
