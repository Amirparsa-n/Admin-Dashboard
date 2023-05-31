import React , {useContext , useState , useEffect} from 'react'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'

// Icons
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
import { FiChevronDown } from 'react-icons/fi'

// images
import avatar from '../data/avatar4.jpg';

// Components
import {Cart , Chat , Notification , UserProfile } from '../components/export';
import Hamburger from './Hamburger'

// Context
import { stateContext} from '../contexts/ContextProvide'



// component navButton
const NavButton = ({ title, icon, customFunc, dotAnimation }) => (

  <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' className='text-xl relative text-white p-3' onClick={() => customFunc()} >
        <span className={dotAnimation && "nav-link-notify"}></span>
        {icon}
      </button>
  </TooltipComponent>
)



function Navbar() {

  const {activeMenu, setActiveMenu, screenSize, setScreenSize, setIsClick, isClick, handleClick} = useContext(stateContext);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    }else {
      setActiveMenu(true);
    }
  }, [screenSize])


  return (
    <div className=' mx-4 rounded-3xl' style={{backgroundColor:'#4C6EF8'}}>
      <div className='mx-8 h-16 mt-4 flex justify-between items-center sm:p-2 md:mx-6 relative '>

        <TooltipComponent content={"Menu"} position='BottomCenter'>
            <button type='button' onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}>
                <Hamburger color={"white"} activeMenu={activeMenu}/>
            </button>
        </TooltipComponent>

        <div className='flex'>
          
          <NavButton title={"Cart"} icon={<FiShoppingCart />} customFunc={() => handleClick("cart")} />
          <NavButton title={"Chat"} icon={<BsChatLeft />} customFunc={() => handleClick("chat")} dotAnimation={true} />
          <NavButton title={"Notification"} icon={<FiBell />} customFunc={() => handleClick("notification")} dotAnimation={true} />

          <TooltipComponent content="Profile" position="BottomCenter">
            <div className='flex items-center gap-x-2 p-1 ml-2 text-white cursor-pointer' onClick={() => handleClick('userProfile')}>
              <img src={avatar} alt="avatar" className='rounded-full w-8 h-8' />

              <p className='flex items-center gap-x-1'>
                <span className='text-14'>Hi,</span>
                <span className='text-gray-100 text-14'> Parsa</span>
                {<FiChevronDown className='text-14'/>}
              </p>
            </div>
          </TooltipComponent>

          {isClick.cart && <Cart />}
          {isClick.chat && <Chat />}
          {isClick.userProfile && <UserProfile />}
          {isClick.notification && <Notification />}

        </div>
      </div>
    </div>
  )
}

export default Navbar