import React from 'react'

import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

// Data
import { ordersData, contextMenuItems, ordersGrid } from '../data/Data'

import {Header} from '../components/export'

const Orders = () => {
  return (
    <div className='m-4 md:mb-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category={"Page"} title={"Orders"} />

    </div>
  )
}

export default Orders