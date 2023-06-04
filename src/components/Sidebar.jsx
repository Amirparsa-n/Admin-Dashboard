import React, { useContext } from 'react'

import {Link , NavLink} from 'react-router-dom';

// Icons
import {BsXCircle} from'react-icons/bs';
import logo from '../assets/image/user-gear.png';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// data 
import { links } from '../data/Data';
import { space } from 'postcss/lib/list';

// Context
import { stateContext } from '../contexts/ContextProvide';



const Sidebar = () => {

  const {activeMenu, setActiveMenu, screenSize, mainColor} = useContext(stateContext);

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  

  return (
    <div className='h-screen ml-5 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
      <>
        <div className='flex justify-between items-center mt-3'>
          <Link to={'/'} className='flex items-center gap-x-2'>
            <img src={logo} alt="logo" className='w-9'/>
            <h1 className='text-lg font-bold dark:text-white transition-colors'>Dashboard</h1>
          </Link>

          <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button' onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)} style={{color: mainColor}} className='transition-colors text-xl p-2 rounded-full block hover:bg-light-gray hover:transition-colors transition-colors md:hidden '>
              <BsXCircle/>
            </button>
          </TooltipComponent>
        </div>

        <div className='mt-10'>
          {links.map(item => (
            <div key={item.title} className='transition-colors'>
              <span className='capitalize dark:text-gray-400 transition-colors'>{item.title}</span>

              {item.links.map(link => (

                <NavLink to={`/${link.name}`} onClick={handleCloseSideBar} style={({isActive}) => isActive ? {'backgroundColor':mainColor} : {}} key={link.name} className={({isActive}) => isActive ? activeLink : normalLink}>
                  <span>{link.icon}</span>
                  <p>{link.name}</p>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
      )}
    </div>
  )
}

export default Sidebar