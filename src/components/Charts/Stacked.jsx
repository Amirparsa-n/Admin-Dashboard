import React, { useContext } from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';

// Data
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/Data';

// Context
import { stateContext } from '../../contexts/ContextProvide';

function Stacked( {width, height} ) {

    const {mainMode} = useContext(stateContext)

    
    return (
    <ChartComponent 
      id='charts' 
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis} 
      primaryYAxis={stackedPrimaryYAxis} 
      tooltip={{enable: true}}
      background={!mainMode ? "#fff" : "#33373E"}
      className='transition-colors'      
    >

      <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category]}/>

      <SeriesCollectionDirective>

       {stackedCustomSeries.map((item, index) => (
        <SeriesDirective key={index} {... item} />
        ))}

      </SeriesCollectionDirective>

    </ChartComponent>
    )
}

export default Stacked