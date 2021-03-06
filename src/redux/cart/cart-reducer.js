import CartActionsTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        carItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
