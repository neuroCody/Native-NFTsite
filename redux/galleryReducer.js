import * as ActionTypes from "./ActionTypes"
import { IMAGES } from "../arrays/images"

const initialState = {
  images: IMAGES,
  mostViewed: IMAGES,
  newest: IMAGES,
  lowToHigh: IMAGES,
  highToLow: IMAGES,
}

// console.log(IMAGES)
const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.NEWEST_RENDERING:
      const NewestDate = {
        ...state,
        newest: state.images.sort(function (a, b) {
          return a.date - b.date
        }),
      }
      return { ...state, newest: NewestDate }
    case ActionTypes.MOSTVIEWED_RENDERING:
      return state
    case ActionTypes.LOWTOHIGH_RENDERING:
      return state
    case ActionTypes.HIGHTOLOW_RENDERING:
      return state
    default:
      return state
  }
}

console.log(galleryReducer())

export default galleryReducer
