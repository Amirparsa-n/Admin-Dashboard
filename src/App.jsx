import React , {useEffect} from 'react';

import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// styles
import "./App.css";

// Icons
// import {FiSettings} from 'react-icons/fi';
import {IoSettingsSharp} from 'react-icons/io5';

// components
import {Navbar , Footer, ThemeSettings, Sidebar } from './components/export';

// Pages
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, ToDo, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages/export';


const App = () => {

    const activeMenu = true;
    // const activeMenu = false;

    return (
        <div>
           <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex:"1000"}}>
                    <TooltipComponent
                        content="Settings"
                        position="LeftCenter"
                    >
                        <button type='button' className='text-3xl settingIcon p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue', borderRadius:'50%'}}>
                            <IoSettingsSharp />
                        </button>
                    </TooltipComponent>
                </div>

                {activeMenu ? (
                    <div className='w-72 fixed transition-all sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                    
                ) : (
                    <div className='w-0 sidebar transition-all dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                )}

                <div className={
                    activeMenu 
                    ?'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full'
                    : 'dark:bg-main-dark-bg bg-main-bg min-h-screen w-full'
                }>
                    <div className='fixed dark:bg-secondary-dark-bg bg-white md:static navbar w-full'>
                        <Navbar />
                    </div>
                </div>

                {/* Router */}
                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path='/' element={<Ecommerce />} />
                        <Route path='/ecommerce' element={<Ecommerce />} />

                        {/* Pages */}
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/employees' element={<Employees />} />
                        <Route path='/customers' element={<Customers />} />

                        {/* Apps */}
                        <Route path='/calendar' element={<Calendar />} />
                        <Route path='/ToDo' element={<ToDo />} />
                        <Route path='/editor' element={<Editor />} />
                        <Route path='/color-picker' element={<ColorPicker />} />

                        {/* Charts */}
                        <Route path='/line' element={<Line />} />
                        <Route path='/area' element={<Area />} />
                        <Route path='/bar' element={<Bar />} />
                        <Route path='/pie' element={<Pie />} />
                        <Route path='/financial' element={<Financial />} />
                        <Route path='/color-mapping' element={<ColorMapping />} />
                        <Route path='/pyramid' element={<Pyramid />} />
                        <Route path="/stacked" element={<Stacked />} />

                    </Routes>
                </div>
                
            </div>
           </BrowserRouter>
        </div>
    );
};

export default App;