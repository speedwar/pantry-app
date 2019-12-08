import React, { memo } from 'react'
import cx from 'classnames'

const PmInventoryListContainer = ({
  edit,
  title,
  items,
  requestActionClick,
  requestActionName
}) => (
  <div className="pm-inventory-list-container p-2 m-3 border">
    <div className="mb-3">
      <h4 className="text-center">{ title }</h4>
    </div>
    <div className="mb-3">
      {/* Table tag can also be useed here */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item l-grid l-grid--center">
          <div className='l-grid__item h-v-hidden'>
            <input type="checkbox" />
          </div>
          <div className="l-grid__item">
            <span className="font-weight-bold">
             Item name
            </span>
          </div>
          <div className="l-grid__item l-grid__item--last">
            <span className="font-weight-bold">
             Qty
            </span>
          </div>
        </li>
        {items && items.map((item) => (
          <li key={ item.id } className="list-group-item l-grid l-grid--center">
            <div className={ cx('l-grid__item', { 'h-v-hidden': !edit }) }>
              <input type="checkbox" />
            </div>
            <div className="l-grid__item">
              { item.name }
            </div>
            <div className="l-grid__item l-grid__item--last">
              { item.quantity }
            </div>
          </li>
        ))}
      </ul>
    </div>
    { edit && (
      <div>
        <button
          className="btn btn-primary"
          onClick={ requestActionClick }
        >
          { requestActionName }
        </button>
      </div>
    )}
  </div>
)

// React.memo() is a great tool to memoize functional components.
// When applied correctly, it prevents component useless rendering 
// when the next props equal to previous.
export default memo(PmInventoryListContainer)