import React from 'react';

import { MapsComponent } from '@syncfusion/ej2-react-maps';
import { LayersDirective, LayerDirective, Inject, MapsTooltip, Legend  } from '@syncfusion/ej2-react-maps';


// Data
import { world_map, complexData } from '../../data/Data';


const Map = () => {
    return (
        <div className='w-300 md:w-400 lg:w-730'>
            <MapsComponent 
            theme="Tailwind" 
            width='100%'
            legendSettings={ {
                visible: true,
                position: 'Top',
                alignment: 'Far',
            } } 
            >

                <Inject services={[MapsTooltip, Legend]} />

                <LayersDirective>
                    <LayerDirective 
                        shapeData={world_map} 
                        shapeDataPath='Country' 
                        shapePropertyPath='name' 
                        dataSource={complexData}

                        tooltipSettings={ {
                            visible: true,
                            valuePath: 'name'
                        } }

                        shapeSettings={ {
                            colorValuePath: 'Membership',
                            // autofill: true,
                            colorMapping: [
                                {
                                    value: 'Sellers', color: '#E56590'
                                },
                                {
                                    value: 'buyers', color: '#4C6EF8'
                                }]
                        } 
                        
                        }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
        </div>
    );
};

export default React.memo(Map);