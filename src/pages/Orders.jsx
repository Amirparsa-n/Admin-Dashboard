import React from 'react'

import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort, Resize,ContextMenu } from '@syncfusion/ej2-react-grids';

// Data
import { ordersData, contextMenuItems, ordersGrid } from '../data/Data'

import {Header} from '../components/export'



const Orders = () => {
  return (
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg transition-colors'>

      <Header category={"Page"} title={"Orders"} />

      <GridComponent
        id='gridComp'
        dataSource={ordersData}
        allowPaging={true}
        allowSorting={true}
        
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Sort, Resize, Filter, Group,ContextMenu]}/>
      </GridComponent>

    </div>
  )
}

export default Orders