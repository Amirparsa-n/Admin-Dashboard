import React, { useContext } from 'react'
import { useState } from 'react';

// Icons
import {BsXCircle} from'react-icons/bs';
import { BsCheck } from 'react-icons/bs';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// data
import { themeColors } from '../data/Data';

import { stateContext } from '../contexts/ContextProvide';

const ThemeSettings = () => {

  const {mainColor, mainMode, setMainColor, setMainMode, openSettings, setOpenSettings, setMode, setColor} = useContext(stateContext)
  

  return (
    <div className='settingPanel fixed rounded-xl nav-item bg-white dark:text-gray-200 dark:bg-secondary-dark-bg transition-all' >
        <div className='p-4'>
          <div className='flex justify-between items-center pb-2 border-b-1'>
              <span className='font-bold text-lg'>Settings</span>
              <button type='button' onClick={() => setOpenSettings(false)} style={{color: mainColor}} className='text-xl p-2 rounded-full block hover:bg-light-gray hover:transition-colors transition-colors'>
                <BsXCircle />
              </button>
          </div>

          <div className='pt-3'>
            <p className='font-semibold '>Theme Option</p>

            <div className='mt-4 relative pb-14'>
                <div className="toggleWrapper">
                  <input 
                  type="checkbox" 
                  value={mainMode ? 'Light' : 'Dark'}
                  checked={mainMode}
                  onChange={setMode}
                  className="dn" 
                  id="dn" 
                  
                  />
                  <label htmlFor="dn" className="toggle">
                    <span className="toggle__handler">
                      <span className="crater crater--1"></span>
                      <span className="crater crater--2"></span>
                      <span className="crater crater--3"></span>
                    </span>
                    <span className="star star--1"></span>
                    <span className="star star--2"></span>
                    <span className="star star--3"></span>
                    <span className="star star--4"></span>
                    <span className="star star--5"></span>
                    <span className="star star--6"></span>
                  </label>
                </div>
            </div>
          </div>

          <div className='border-t-1 pt-3 pb-2'>
            <p className='font-semibold '>Theme Colors</p>

            <div className='flex justify-between flex-wrap gap-2'>
              {themeColors.map((item, index)=> (
                <TooltipComponent key={index} content={item.name} position='TopCenter'>
                    <div className='relative mt-3 cursor-pointer flex gap-5 items-center '>
                      <button type='button' className='h-10 w-10 rounded-full cursor-pointer' style={{backgroundColor: item.color}} onClick={() => setColor(item.color)}>
                        <BsCheck className={`ml-2 text-2xl text-white ${mainColor === item.color ? 'block' : 'hidden'}`}/>
                      </button>
                    </div>
                </TooltipComponent>
              ))}
            </div>
          </div>

        </div>
    </div>
  )
}

export default ThemeSettings