import { combineReducers } from 'redux'
import { crudReducer } from './crudReducer'
import { shoppingReducer } from './shoppingReducer'

const reducer = combineReducers({
  shopping: shoppingReducer,
  crud: crudReducer,
})

export default reducer
