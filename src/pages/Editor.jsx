import React, {useContext} from 'react'

import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

// Data
import { EditorData } from '../data/Data';

// Component
import {Header} from '../components/export'

// Context
import { stateContext } from '../contexts/ContextProvide';

const Editor = () => {

  const {mainMode} = useContext(stateContext)


  let toolbarSettings = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  };


  let quickToolbarSettings = {
    image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'],
    link: ['Open', 'Edit', 'UnLink']
  };

  return (
    <div className='m-4 mt-36 sm:mt-0 md:mb-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg transition-colors'>

      <Header category={"Apps"} title={"Editor"} />


      <RichTextEditorComponent 
        height={"650px"} 
        toolbarSettings={toolbarSettings} 
        quickToolbarSettings={quickToolbarSettings}
        background={!mainMode ? "#fff" : "#33373E"}

      >

          <EditorData/>

      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>


    </div>
  )
}

export default Editor