import React, {useContext} from 'react'

import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, PieSeries, AccumulationTooltip,
  AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';


// Context
import { stateContext } from '../../contexts/ContextProvide';


const Pie = ({ data,id ,height, width, legendSettingsVisible  }) => {

  const {mainMode} = useContext(stateContext)

  return (
        <AccumulationChartComponent  
        id={id}
        height={height}
        width={width}
        background={!mainMode ? "#fff" : "#33373E"}
        legendSettings={{ visible: legendSettingsVisible, background: 'white' }}
        chartArea={{border: {width: 0}}}
        >
          <Inject services={[AccumulationLegend, PieSeries,AccumulationTooltip, AccumulationDataLabel]}/>

          <AccumulationSeriesCollectionDirective>

            <AccumulationSeriesDirective 
            dataSource={data} 
            xName='x' 
            yName='y'
            explode={true} 
            explodeOffset='10%' 
            explodeIndex={0}
            innerRadius="40%"
            dataLabel={{
              visible: true,
              position: 'Inside', name: 'text',
              font: {
                  fontWeight: '600',
                  color: '#fff',
              },
              connectorStyle:{ length : '20px' ,type: 'Curve'}
            }}
            >
            </AccumulationSeriesDirective>

          </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>
  )
}

export default Pie