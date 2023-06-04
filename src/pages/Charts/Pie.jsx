import React, {useContext} from 'react'

import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, PieSeries, AccumulationTooltip,
  AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';

// Data
import { pieChartData } from '../../data/Data';

// Component
import {Header} from '../../components/export'

// Context
import { stateContext } from '../../contexts/ContextProvide';


const Pie = () => {

  const {mainMode} = useContext(stateContext)

  return ( 
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg transition-colors'>

      <Header category={"Charts"} title={"Pie"} />

      <div className='w-full '>
        <AccumulationChartComponent  
        id='pie-chart'
        height='420px'
        background={!mainMode ? "#fff" : "#33373E"}
        legendSettings={{ background: 'white' }}
        chartArea={{border: {width: 0}}}
        >
          <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]}/>

          <AccumulationSeriesCollectionDirective>

            <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y'
                explode={true} explodeOffset='10%' explodeIndex={0}
                dataLabel={{
                    visible: true,
                    position: 'Outside', name: 'text',
                    font: {
                        fontWeight: '600'
                    },
                connectorStyle:{ length : '20px' ,type: 'Curve'}
                }}
            >
            </AccumulationSeriesDirective>

          </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>
      </div>

    </div>
  )
}

export default Pie