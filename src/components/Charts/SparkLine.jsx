import React from 'react'


import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
    render() {

      const {data, id, height, width, color, currentColor, type } = this.props;

        return (
          <SparklineComponent
          id={id}
          height={height}
          width={width}
          fill={color} 
          valueType='Category' 
          xName='x' 
          yName='y' 
          dataSource={data}
          type={type}

          tooltipSettings={{
              visible: true,
              template: `<div id="sparktooltip" style="border-radius: 5px;background: ${currentColor};` +
                  'color: #FFFFFF !important;font-size: 16px;font-style: italic;padding: 8px;">' +
                  '${x} : data ${y} </div>',
              
              trackLineSettings:{
                visible: true,
                color: currentColor,
              }
          }}
          
          >
            <Inject services={[SparklineTooltip]}/>
          </SparklineComponent>);
    }
}

export default SparkLine;