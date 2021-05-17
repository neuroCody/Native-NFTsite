import * as ActionTypes from "./actionTypes"
import { IMAGES } from "../arrays/images"

export const initialState = {
  images: IMAGES,
}

export const NewestArr = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.NEWEST_RENDERING:
      const NewestDate = {...state, images: state.images.sort(function (a, b) {
        return a.date - b.date
      })}
      return { ...state, images: state.images.map((i) => i === NewestDate) }
    default:
        return state
  }
}
