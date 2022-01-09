import { CHANGE_SORT_ITEM, GO_HOME, HIDE_LOADER, STORE_LOCATION, SWITCH_LOCATION } from "./types"

const initialState = {
    sortItems: 'all',
    loader: true,
    //location отвечает за кнопку в шапке true назначает переход в корзину, false в магазин
    location: true,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIDE_LOADER:
            return { ...state, loader: false }

        case CHANGE_SORT_ITEM:
            return {...state, sortItems: action.payload}

        case SWITCH_LOCATION:
            return {...state, location: !state.location}

        case GO_HOME:
            return {...state, location: true}

        case STORE_LOCATION:
            return {...state, location: false}

        default: return state
    }
}