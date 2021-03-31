export const initialState= {
    basket: [],
};

export function reducer(state, action) {

  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex( x => x.id === action.id)
      console.log("index"+ index)
      newBasket.splice(index,1)
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}

