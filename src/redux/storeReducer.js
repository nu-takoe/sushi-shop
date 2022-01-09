import { ADD_TO_CART, DELETE_FROM_CART, FETCH_ITEMS, INCREACE_ITEM, REDUCE_ITEM, SET_CART } from "./types"

const initialState = {
    menu: [],
    cart: [],
    totalPrice: 0,
}

export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return { ...state, menu: action.payload }

        case ADD_TO_CART:
            return { ...state, cart: state.cart.concat(action.payload) }

        case DELETE_FROM_CART:
            return {...state, cart: state.cart.filter(item => item.name !== action.payload)}

        case INCREACE_ITEM:
            return{...state, cart: state.cart.map(item => (item.id === action.payload) ? {...item, current: ++item.current } : {...item})}

        case REDUCE_ITEM:
            return{...state, cart: state.cart.map(item => (item.id === action.payload) ? {...item, current: --item.current } : {...item})}

        case SET_CART:
            return{...state, cart: action.payload}

        default: return state
    }
}