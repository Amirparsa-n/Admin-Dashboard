import React from 'react'

import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort, Resize,ContextMenu, Toolbar, Selection, Edit,  } from '@syncfusion/ej2-react-grids';

// Data
import { customersData, customersGrid } from '../data/Data';

// Component
import {Header} from '../components/export'


const Customers = () => {
  return (
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category={"Page"} title={"Customers"} />

      <GridComponent
        id='gridComp'
        dataSource={customersData}

        width={"auto"}
        toolbar={["Delete"]}
        editSettings={{allowDeleting: true,allowEditing: true, allowAdding: true,}}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Resize, Filter, Group, ContextMenu, Toolbar, Selection,Edit ]}/>
      </GridComponent>

    </div>
  )
}

export default Customers