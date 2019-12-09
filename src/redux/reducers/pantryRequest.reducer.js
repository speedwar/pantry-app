import { pantryRequestConstants } from 'rx/constants'

const initialState = {
  status: null,
  pantry: [],
  error: {
    status: null,
    message: null,
  }
}

export function pantryRequestReducer(state = initialState, action) {
  switch (action.type) {
    case pantryRequestConstants.PANTRY_REQUEST_SUCCESS:
      const prevState = { ...state }
      const newPantry = prevState.pantry
      const lastId = newPantry.length
      const newItem = { id: lastId.toString(), name: action.payload.name, quantity: action.payload.quantity }
      const eventType = action.payload.eventType
      const intersectIndex = newPantry.findIndex(item => item.name === newItem.name)

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

      const updatePantry = () => {
        if (intersectIndex !== -1) {
          if ((eventType === 'onblur' || eventType === 'decrement') && newItem.quantity <= 0) {
            return removeItem(newPantry, intersectIndex)
          }
          return updateItem(newPantry, newItem, intersectIndex)
        } else {
          return insertItem(newPantry, newItem)
        }
      }

      return {
        ...state,
        status: { success: true },
        pantry: updatePantry(),
        error: null
      }

    default:
      return state
  }
}
