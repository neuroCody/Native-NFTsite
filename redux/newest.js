import * as ActionTypes from "./ActionTypes"
import { IMAGES } from "../arrays/images"

const initialState = {
  images: IMAGES,
}

export const Newest = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.NEWEST_RENDERING:
      const NewestDate = IMAGES.sort(function (a, b) {
        return a.date - b.date
      })
      return { ...state, images: state.images.map((i) => i === NewestDate) }
  }
}
