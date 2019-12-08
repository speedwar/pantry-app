import React from 'react'

import PmInventoryItemListContainer from 'components/PmInventory/PmInventoryItemListContainer'
import PmInventoryItemController from 'components/PmInventory/PmInventoryItemController'
import PmInventoryModeSwitch from 'components/PmInventory/PmInventoryModeSwitch'

const PmInventoryStorekeeper = ({ list }) => {
  return (
    <>
      <div className='l-grid l-grid--center p-2 p-2 border-bottom'>
        <h2>Storekeeper's Inventory Management System</h2>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <PmInventoryItemListContainer
            edit={ true }
            title='Received Pantry requests'
            items={ null }
            requestActionClick={ () => {} }
            requestActionName='Fulfill Selected Requests'
          />
        </div>
        <div className='col-sm-12 col-md-6'>
          <PmInventoryItemListContainer
            title='Inventory'
            items={ list }
          />
        </div>
      </div>

      <PmInventoryItemController
        title='Add / Remove / Modify Item Inventory'
      />
      <PmInventoryModeSwitch />
    </>
  )
}


export default PmInventoryStorekeeper
