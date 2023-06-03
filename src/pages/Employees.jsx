import React from 'react'

import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort, Resize,ContextMenu, Search, Toolbar } from '@syncfusion/ej2-react-grids';

// Data
import { employeesData, employeesGrid } from '../data/Data';

// Component
import {Header} from '../components/export'


const Employees = () => {

  return (
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category={"Page"} title={"Employees"} />

      <GridComponent
        id='gridComp'
        dataSource={employeesData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search', "Print"]}
        width={"auto"}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Sort, Resize, Filter, Group, ContextMenu, Search, Toolbar ]}/>
      </GridComponent>

    </div>
  )
}

export default Employees