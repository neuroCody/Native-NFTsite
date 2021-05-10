import * as ActionTypes from "./ActionTypes"
import { IMAGES } from "../arrays/images"

const initialState = {
  images: IMAGES,
}
// console.log(IMAGES)
export const NewestArr = (state = initialState, action) => {
    console.log(state)
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