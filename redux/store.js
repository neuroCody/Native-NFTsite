import { createStore, combineReducers } from "redux"
import { galleryReducer } from "./galleryReducer"

const rootReducer = {
  gallery: galleryReducer,
}

const store = createStore(rootReducer)

console.log("this is reducer", rootReducer)

export default store
