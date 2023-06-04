import React from 'react'

// Component
import { Stacked as StackedChart } from '../../components/export'

// Component
import {Header} from '../../components/export'

// Context
import { stateContext } from '../../contexts/ContextProvide';


const Stacked = () => {
  return (
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg transition-colors'>

      <Header category={"Charts"} title={"Stacked"} />

      <div className='w-full'>
        <StackedChart />
      </div>
        
    </div>
  )
}

export default Stacked