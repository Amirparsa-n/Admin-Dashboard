import React, {useContext} from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, DateTime, SplineAreaSeries } from '@syncfusion/ej2-react-charts';

// Data
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/Data';

// Component
import {Header} from '../../components/export'

// Context
import { stateContext } from '../../contexts/ContextProvide';


const Area = () => {

  const {mainMode} = useContext(stateContext)

  return ( 
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg transition-colors'>

      <Header category={"Charts"} title={"Area"} />

      <div className='w-full '>
        <ChartComponent 
        id='area-chart'
        height='420px'
        background={!mainMode ? "#fff" : "#33373E"}
        primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis}
        legendSettings={{ background: 'white' }}
        chartArea={{border: {width: 0}}}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]}/>

          <SeriesCollectionDirective>

            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {... item} />
            ))}

          </SeriesCollectionDirective>

        </ChartComponent>
      </div>

    </div>
  )
}

export default Area