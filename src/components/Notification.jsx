import React from 'react'
import { useContext } from 'react';

// Icons
import {BsXCircle} from'react-icons/bs';

// Context
import { stateContext } from '../contexts/ContextProvide';

// Data
import { chatData } from '../data/Data';

// Component
import Button from '../components/Button';

const Notification = () => {

  const {mainColor,handleClickFalse } = useContext(stateContext);

  return (
    <div className='nav-item transition-all absolute navbarItem md:right-36 top-12 bg-white dark:bg-[#42464D] p-8 rounded-lg w-80 md:w-9 shadow-2xl'>
      <div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-x-3'>
            <p className='dark:text-white'>Notification</p>
            <span className='text-gray-400'>4New</span>
          </div>
          
          <button
            className='text-xl'
            style={{color: mainColor}}
            onClick={() => handleClickFalse('notification')}
          >
            <BsXCircle />
          </button>
        </div>

        <div className='mt-6 mb-5 flex flex-col gap-y-3'>
          {chatData.map((item ,index)=> (
            <div key={index} className='flex items-center gap-x-4 border-b-1 pb-3 dark:border-slate-800'>
              <img src={item.image} alt={item.message} className='w-16 rounded-full'/>

              <div className='flex flex-col'>
                <p className='dark:text-white'>{item.message}</p>
                <span className='text-sm dark:text-gray-400 mt-100'>{item.desc}</span>
                <span className='text-xs dark:text-gray-500'>{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        <Button 
          bgColor={mainColor}
          color={"white"}
          size ={"14px"}
          text ={"See all notification"}
          borderRadius ={"12px"}
          width={"100%"}
        />

      </div>
    </div>
  )
}

export default Notification