import React, {useContext} from 'react'

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection, AccumulationLegend } from '@syncfusion/ej2-react-charts';

// Data
import { PyramidData } from '../../data/Data';

// Component
import {Header} from '../../components/export'

// Context
import { stateContext } from '../../contexts/ContextProvide';


const Pyramid = () => {

  const {mainMode} = useContext(stateContext)

  return ( 
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg transition-colors'>

      <Header category={"Charts"} title={"Pyramid"} />

      <div className='w-full '>
        <AccumulationChartComponent  
        id='line-chart'
        height='420px'
        background={!mainMode ? "#fff" : "#33373E"}
        legendSettings={{ background: 'white' }}
        chartArea={{border: {width: 0}}}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection, AccumulationLegend]}/>

          <AccumulationSeriesCollectionDirective>

            <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid' width={'45%'} height='80%' neckWidth='15%' gapRatio={0.03} 
            explode={true} emptyPointSettings={{ mode: 'Drop', fill: 'red' }} 
            dataLabel={{
            visible: true,
            name: 'text',
            position: 'Outside',
            connectorStyle: { length: '20px' },
            font: {
                fontWeight: '600',
            }}}
            />

          </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>
      </div>

    </div>
  )
}

export default Pyramid