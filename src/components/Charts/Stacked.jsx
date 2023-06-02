import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';

// Data
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/Data';

function Stacked( {width, height} ) {

    const primaryxAxis = { title: 'Years', interval: 1, valueType: 'Category' };
    const primaryyAxis = {
        title: 'Sales in Billions', minimum: 0, maximum: 700, interval: 100,
        labelFormat: '{value}B'
    };
    
    return (
    <ChartComponent 
      id='charts' 
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis} 
      primaryYAxis={stackedPrimaryYAxis} 
      title='Mobile Game Market by Country'
      tooltip={{enable: true}}
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