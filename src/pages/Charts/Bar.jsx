import React, {useContext} from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, BarSeries, DataLabel, ColumnSeries} from '@syncfusion/ej2-react-charts';

// Data
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/Data';

// Component
import {Header} from '../../components/export'

// Context
import { stateContext } from '../../contexts/ContextProvide';


const Bar = () => {

  const {mainMode} = useContext(stateContext)

  return ( 
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg transition-colors'>

      <Header category={"Charts"} title={"Bar"} />

      <div className='w-full '>
        <ChartComponent 
        id='bar-chart'
        height='420px'
        background={!mainMode ? "#fff" : "#33373E"}
        primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis}
        legendSettings={{ background: 'white' }}
        chartArea={{border: {width: 0}}}
        >
          <Inject services={[BarSeries, Legend, Tooltip, Category, DataLabel, ColumnSeries]}/>

          <SeriesCollectionDirective>

            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {... item} />
            ))}

          </SeriesCollectionDirective>

        </ChartComponent>
      </div>

    </div>
  )
}

export default Bar