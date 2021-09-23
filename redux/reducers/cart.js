import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let updatedOrNewCartItem;

      if (items[addedProduct.id]) {
        //already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
        return {
          ...state,
          items: {...state.items, [addedProduct.id]: updatedCartItem},
          totalAmount: state.totalAmount + prodPrice 

        }
      } else {
        updatedOrNewaction = new CartItem(1, prodPrice, propTitle, propPrice);
        return {
          ...state,
          item: { ...state.items, [addedProduct.id]:newCartItem},
          totalAmount: state.totalAmount + prodPrice
        };
      }
  }
  return state;
};
