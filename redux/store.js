import { createStore, combineReducers } from 'redux'
import { NewestArr, initialState } from './newest'

export const ConfigureStore = () => {
  const store = createStore(
        NewestArr,
        initialState,
  )
  return store
}
