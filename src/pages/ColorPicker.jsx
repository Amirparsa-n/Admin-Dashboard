import React from 'react'

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';


// Data
import { EditorData } from '../data/Data';

// Component
import {Header} from '../components/export'

const ColorPicker = () => {

  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  }

  return (
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header category={"Apps"} title={"ColorPicker"} />

      <div className='text-center'>
        <div id="preview" className='w-80 md:w-800'/>
  
        <div className="flex justify-center items-center gap-20 flex-wrap">
              <div>
                <p className='text-2xl font-semibold mt-2 mb-4'>Color Palette</p>
                <ColorPickerComponent  id='inline-palette' mode='Palette' modeSwitcher={false} inline={true} showButtons={false} change={change}/>
              </div>
              <div>
                <p className='text-2xl font-semibold mt-2 mb-4'>Color Picker</p>
                <ColorPickerComponent  id='Picker' mode='Picker' modeSwitcher={false} inline={true} showButtons={false} change={change}/>
              </div>
          </div>
      </div>


    </div>
  )
}

export default ColorPicker