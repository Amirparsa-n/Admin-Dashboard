import React, {useContext} from 'react'

import { ChartComponent, SeriesCollectionDirective, Tooltip, SeriesDirective, Inject, ColumnSeries, Category, Selection, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
// Data
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/Data';

// Component
import {Header} from '../../components/export'

// Context
import { stateContext } from '../../contexts/ContextProvide';


const ColorMapping = () => {

  const {mainMode} = useContext(stateContext)

  return ( 
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg transition-colors'>

      <Header category={"Charts"} title={"ColorMapping"} />

      <div className='w-full '>
        <ChartComponent 
        id='charts'
        height='420px'
        style={{ textAlign: "center" }}
        // lectionMode='Point'
        background={!mainMode ? "#fff" : "#33373E"}
        primaryXAxis={ColorMappingPrimaryXAxis} primaryYAxis={ColorMappingPrimaryYAxis}
        legendSettings={{ background: 'white', mode: 'Range', visible: true, toggleVisibility: false }}
        chartArea={{border: {width: 0}}}
        tooltip={{enable: true}}
        >
          <Inject services={[ColumnSeries, Selection, Category, Legend, Tooltip]}/>

          <SeriesCollectionDirective>
              <SeriesDirective dataSource={colorMappingData[0]} name='USA' xName='x' yName='y' type='Column' cornerRadius={{topLeft: 10, topRight: 10}}/>
          </SeriesCollectionDirective>
          
          <RangeColorSettingsDirective>
              {rangeColorMapping.map((item, index) => (
                <RangeColorSettingDirective key={index} {...item} />
              ))}
          </RangeColorSettingsDirective>

        </ChartComponent>
      </div>

    </div>
  )
}

export default ColorMapping