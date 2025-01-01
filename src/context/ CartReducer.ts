// CartReducer.ts
export const cartReducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "DELETE_PRODUCTS":
        return {
          ...state,
          cart: state.cart.filter((product: any) => product.id !== action.payload),
        };
      default:
        return state;
    }
  };
  