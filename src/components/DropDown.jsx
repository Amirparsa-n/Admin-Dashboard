import React from 'react';

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const DropDown = ({data, id, currentMode }) => {
    return (
        <div  className="w-28 border-1 border-color px-2 py-1 rounded-md">
            <DropDownListComponent id={id} fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: currentMode ? 'white' : 'black' }}  value="1" dataSource={data} popupHeight="220px" popupWidth="120px" />
        </div>
    );
};


export default DropDown;