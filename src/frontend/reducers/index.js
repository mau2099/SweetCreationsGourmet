const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const exist = false;
      state.myList.forEach((element) => {
        if (element.id == action.payload.id) {
          exist = true;
        }
      });
      if (!exist) {
        return {
          ...state,
          myList: [...state.myList, action.payload],
        };
      }

    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          {},
      };
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        sidebarisOpen: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'DELETE_FROM_CART':
      console.log('action toggle drawer', action);
      return {
        ...state,
        cart: state.cart.filter((items) => items.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
