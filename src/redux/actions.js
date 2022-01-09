import { ADD_TO_CART, CHANGE_SORT_ITEM, DELETE_FROM_CART, FETCH_ITEMS, GO_HOME, HIDE_LOADER, INCREACE_ITEM, REDUCE_ITEM, SET_CART, SET_TOTAL_PRICE, SHOW_LOADER, STORE_LOCATION, SWITCH_LOCATION } from "./types"

export function fetchPosts() {
    return async dispatch => {
        const response = await fetch('https://61817eda32c9e2001780483a.mockapi.io/items')
        const json = await response.json()
        dispatch({ type: FETCH_ITEMS, payload: json })
    }
}

//загрузка корзины из локалсторадж

export function setCart() {
    return async dispatch => {
        const json = await JSON.parse(localStorage.cart)
        dispatch({ type: SET_CART, payload: json })
    }
}

//изменение показанных товаров на главной странице
export function changeItemsSort(sort) {
    return { type: CHANGE_SORT_ITEM, payload: sort }
}

//управение лоадерами
export function showLoader() {
    return { type: SHOW_LOADER }
}
export function hideLoader() {
    return { type: HIDE_LOADER }
}

//экшены добавления и удаления товара из корзины
export function addToCart(item) {
    let clone = {}
    Object.assign(clone, item)

    return { type: ADD_TO_CART, payload: clone }
}
export function deleteFromCart(itemName) {
    return { type: DELETE_FROM_CART, payload: itemName }
}

//увеличение и уменшение количества конкретного товара в корзине
export function icreaceItem(itemId) {
    return { type: INCREACE_ITEM, payload: itemId }
}
export function reduceItem(itemId, current, itemName) {
    if (current <= 1) {
        return { type: DELETE_FROM_CART, payload: itemName }
    } else {
        return { type: REDUCE_ITEM, payload: itemId }
    }
}

//перемещение между корзиной и магазином
export function switchLocation() {
    return { type: SWITCH_LOCATION }
}

//перемещение в магазин
export function goHome() {
    return { type: GO_HOME }
}

export function storeLocation() {
    return { type: STORE_LOCATION }
}

export function setTotalPrice(price) {
    return { type: SET_TOTAL_PRICE, payload: price }
}

