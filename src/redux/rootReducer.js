import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { storeReducer } from "./storeReducer";

export const rootReducer = combineReducers(
    {
        app: appReducer,
        store: storeReducer,
    }
)