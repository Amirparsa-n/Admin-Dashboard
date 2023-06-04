import React, {useContext} from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries, DateTime } from '@syncfusion/ej2-react-charts';

// Data
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from '../../data/Data';

// Component
import {Header} from '../../components/export'

// Context
import { stateContext } from '../../contexts/ContextProvide';


const Line = () => {

  const {mainMode} = useContext(stateContext)

  return ( 
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg transition-colors'>

      <Header category={"Charts"} title={"Line"} />

      <div className='w-full '>
        <ChartComponent 
        id='line-chart'
        height='420px'
        background={!mainMode ? "#fff" : "#33373E"}
        primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis}
        legendSettings={{ background: 'white' }}
        chartArea={{border: {width: 0}}}
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>

          <SeriesCollectionDirective>

            {lineCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {... item} />
            ))}

          </SeriesCollectionDirective>

        </ChartComponent>
      </div>

    </div>
  )
}

export default Line