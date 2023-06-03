import React from 'react'

import { ScheduleComponent, WorkWeek, Week, Month, Day, Inject, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';


// Data
import { scheduleData } from '../data/Data';

// Component
import {Header} from '../components/export'

const Calendar = () => {
  return (
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category={"Apps"} title={"Calendar"} />


      <ScheduleComponent 
      height='650px' 
      eventSettings={{dataSource: scheduleData}} 
      selectedDate={new Date(2023, 0, 10)}
      >

        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
      </ScheduleComponent>

    </div>
  )
}

export default Calendar