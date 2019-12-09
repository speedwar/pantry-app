import { inventoryConstants } from 'rx/constants'

const initialState = {
  status: null,
  inventory: [],
  error: { // Good Error Examples
    status: null,
    message: null,
  }
}

export function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    /*
     * GET
     */
    case inventoryConstants.INVENTORY_LOAD_REQUEST:
      return {
        ...state,
        status: { request: true },
        error: null
      }
    case inventoryConstants.INVENTORY_LOAD_SUCCESS:
      const items = action.payload.data.items
      return {
        ...state,
        status: { success: true },
        inventory: items,
        error: null
      }
    case inventoryConstants.INVENTORY_LOAD_FAILURE:
      return {
        ...state,
        status: { success: false },
        error: action.error
      }

    /*
     * UPDATE
     */
    case inventoryConstants.INVENTORY_UPDATE_SUCCESS:
      const prevState = { ...state }
      const newInventory = prevState.inventory
      const lastId = newInventory.length
      const newItem = { id: lastId.toString(), name: action.payload.name, quantity: action.payload.quantity }
      const eventType = action.payload.eventType
      const intersectIndex = newInventory.findIndex(item => item.name === newItem.name) 
      const insertItem = (array, newItem) => {
        return [
          ...array,
          newItem,
        ]
      }
      const updateItem = (array, newItem, i) => {
        array[i].quantity = newItem.quantity
        return [
          ...array
        ]
      }
      const removeItem = (array, i) => {
        array.splice(i, 1) // Removing Array Items By Value Using Splice
        return [
          ...array
        ]
      }

      const updateInventory = () => {
        if (intersectIndex !== -1) {
          if ((eventType === 'onblur' || eventType === 'decrement') && newItem.quantity <= 0) {
            return removeItem(newInventory, intersectIndex)
          }
          return updateItem(newInventory, newItem, intersectIndex)
        } else {
          return insertItem(newInventory, newItem)
        }
      }

      return {
        ...state,
        status: { success: true },
        inventory: updateInventory(),
        error: null
      }

    default:
      return state
  }
}
