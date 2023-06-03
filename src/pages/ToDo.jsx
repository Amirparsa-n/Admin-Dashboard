import React from 'react'


import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";


// Data
import { kanbanGrid, kanbanData } from '../data/Data';

// Component
import {Header} from '../components/export'

const ToDo = () => {
  return (
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category={"Apps"} title={"ToDo"} />
      
      <KanbanComponent 
      id="kanban" 
      keyField="Status" 
      dataSource={kanbanData} 
      cardSettings={{ contentField: "Summary", headerField: "Id" }}
      swimlaneSettings={true}
      >

        <ColumnsDirective>

          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {... item} />
          ))}

        </ColumnsDirective>
      </KanbanComponent>


    </div>
  )
}

export default ToDo