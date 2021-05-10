import { createStore, combineReducers } from 'redux'
import { NewestArr } from './newest'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
        NewestArr: NewestArr,
    })
  )
  return store
}
