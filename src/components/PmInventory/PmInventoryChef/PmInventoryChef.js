import React  from 'react'

import PmInventoryItemListContainer from 'components/PmInventory/PmInventoryItemListContainer'
import PmInventoryItemController from 'components/PmInventory/PmInventoryItemController'
import PmInventoryModeSwitch from 'components/PmInventory/PmInventoryModeSwitch'

const PmInventoryChef = ({ list }) => {
  return (
    <>
      <div className='l-grid l-grid--center p-2 p-2 border-bottom'>
        <h2>Chefs' Pantry Requests</h2>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <PmInventoryItemListContainer
            edit={ true }
            title='Satisfied Requests'
            items={ null }
            requestActionClick={ () => {} }
            requestActionName='Clear Selected Requests'
          />
        </div>
        <div className='col-sm-12 col-md-6'>
          <PmInventoryItemListContainer
            title='Pantry Request'
            items={ null }
          />
        </div>
      </div>

      <PmInventoryItemController 
        title='Add / Remove / Modify Pantry Request'
      />
      <PmInventoryModeSwitch />
    </>
  )
}

export default PmInventoryChef
