import { combineReducers } from 'redux'
import { inventoryReducer } from './inventory.reducer'
import { pantryRequestReducer } from './pantryRequest.reducer'
import { userContextReducer } from './userContext.reducer'

const rootReducer = combineReducers({
  inventoryReducer,
  pantryRequestReducer,
  userContextReducer,
})

export default rootReducer
