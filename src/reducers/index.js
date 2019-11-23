const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
      //shopingcart
    case 'ADD_TO_CART':
      const exist = state.cart.find((item) => item._id === action.payload._id);
      if (exist) {
        action.payload.quantity += 1;
        action.payload.newPrice = action.payload.quantity * action.payload.price;
        return {
          ...state,
          totalCart: state.totalCart + action.payload.price,
        };
      }
      action.payload.quantity = 1;
      action.payload.newPrice = action.payload.price;
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalCart: state.totalCart + Number(action.payload.price),
      };

    case 'DELETE_PRODUCT':
      return {
        ...state,
        cart: state.cart.filter((items) => items._id !== action.payload._id),
        totalCart: state.totalCart - (Number(action.payload.quantity) * Number(action.payload.price)),
      };
    case 'PLUS_QUANTITY':
      action.payload.quantity += 1;
      action.payload.newPrice = action.payload.quantity * action.payload.price;
      return {
        ...state,
        totalCart: state.totalCart + action.payload.price,
      };
    case 'MINUS_QUANTITY':
      const isGreaterThanOne = action.payload.quantity > 1;
      if (isGreaterThanOne) {
        action.payload.quantity -= 1;
        action.payload.newPrice = action.payload.quantity * action.payload.price;
        return {
          ...state,
          totalCart: state.totalCart - action.payload.price,
        };
      }

      alert('No es posible disminuir la cantidad de productos, te sugiero eliminarlo =)');

      //Lista de deseos
    // case 'ADD_TO_WISHES':
    //   const existWishes = state.wishes.find((item) => item._id === action.payload._id);
    //   if (existWishes) {
    //     action.payload.quantity += 1;
    //     action.payload.newPrice = action.payload.quantity * action.payload.price;
    //     return {
    //       ...state,
    //       totalWishes: state.totalWishes + action.payload.price,
    //     };
    //   }
    //   action.payload.quantity = 1;
    //   action.payload.newPrice = action.payload.price;
    //   return {
    //     ...state,
    //     wishes: [...state.wishes, action.payload],
    //     totalWishes: state.totalWishes + Number(action.payload.price),
    //   };


    case 'DELETE_PRODUCT_WISHES':
      return {
        ...state,
        wishes: state.wishes.filter((items) => items._id !== action.payload._id),
        totalWishes: state.totalWishes - (Number(action.payload.quantity) * Number(action.payload.price)),
      };
    case 'PLUS_QUANTITY_WISHES':
      action.payload.quantity += 1;
      action.payload.newPrice = action.payload.quantity * action.payload.price;
      return {
        ...state,
        totalWishes: state.totalWishes + action.payload.price,
      };
    case 'MINUS_QUANTITY_WISHES':
      const isGreater = action.payload.quantity > 1;
      if (isGreater) {
        action.payload.quantity -= 1;
        action.payload.newPrice = action.payload.quantity * action.payload.price;
        return {
          ...state,
          totalWishes: state.totalWishes - action.payload.price,
        };
      }

      alert('No es posible disminuir la cantidad de productos, te sugiero eliminarlo =)');
    
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };


      // funcionalidad agregada para wishes
      // agrega a la lista wishes verificando que el elemento no exista
      case 'ADD_TO_WISHES':
        const inList = state.wishes.find(item => item._id === action.payload._id);
        if (inList) {
          alert('Este producto ya existe en tu lista de deseos');
          return {
            ...state,
          };
        }
        else {
          return {
            ...state,
            wishes: [...state.wishes, action.payload ],
          };
        }
      // elimina de wishes
      case 'REMOVE_TO_WISHES':
        return {
          ...state,
          wishes: state.wishes.filter(items => items._id !== action.payload._id),
        };  
    default:
      return state;
  }
};

export default reducer;

