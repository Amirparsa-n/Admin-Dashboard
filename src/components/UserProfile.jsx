import React, {useContext} from 'react'

// Icons
import {BsXCircle} from'react-icons/bs';

// Context
import { stateContext } from '../contexts/ContextProvide';

// Data
import { userProfileData } from '../data/Data'

// Component
import Button from '../components/Button';

// images
import avatar from '../data/avatar4.jpg';


const UserProfile = () => {

  const {mainColor, handleClickFalse} = useContext(stateContext);

  return (
    <div className='nav-item transition-all navbarItem absolute md:right-1 top-12 bg-white dark:bg-[#42464D] p-8 rounded-lg w-80 md:w-96 shadow-2xl'>
      <div>
        
        <div className='flex justify-between'>
          <p className='dark:text-white'>User Profile</p>
          
          <button type='button' className='text-xl' style={{color: mainColor}} onClick={() => handleClickFalse("userProfile")}>
            <BsXCircle />
          </button>
        </div>

        <div className='mt-6 flex items-center gap-x-4 border-b-1 pb-5 dark:border-slate-800'>
          <div>
            <img src={avatar} alt="avatar" className='w-24 rounded-full'/>
          </div>

          <div className='flex flex-col'>
            <p className='text-lg dark:text-white'>Amirparsa Naghibi</p>
            <span className='text-sm mt-1 dark:text-gray-400'>Administrator</span>
            <span className='text-xs dark:text-gray-400'>amirparsanaghibi@gmail.com</span>
          </div>
        </div>

        <div className='mt-4 flex flex-col gap-y-5 border-b-1 pb-4 dark:border-slate-800'>
          {userProfileData.map((item, index) => (
            <div key={index} className='flex gap-x-3 items-center'>
                <button
                  type='button'
                  className='text-2xl p-4 rounded-2xl'
                  style={{color: item.iconColor, backgroundColor: item.iconBg}}
                >
                  {item.icon}
                </button>

                <div>
                  <p className='dark:text-white '>{item.title}</p>
                  <p className='dark:text-gray-400 text-gray-500'>{item.desc}</p>
                </div>
            </div>
          ))}
        </div>

        <div className='mt-5'>
            <Button 
              bgColor={mainColor}
              color={"white"}
              size ={"14px"}
              text ={"Logout"}
              borderRadius ={"12px"}
              width={"100%"}
            />
        </div>

      </div>
    </div>
  )
}

export default UserProfile