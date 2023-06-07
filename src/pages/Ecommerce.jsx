import React, {useContext ,useEffect} from 'react'



// icons
import { BsCurrencyDollar } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import Expense from '../assets/image/Expense';
import Budget from '../assets/image/Budget';
import EarningsBg from '../assets/image/EarningsBg';

import { Stacked, Pie, Button, SparkLine, Map } from '../components/export';
import { earningData, SparklineAreaData, ecomPieChartData, recentTransactions, dropdownData } from '../data/Data';

// Context
import { stateContext } from '../contexts/ContextProvide';

// DropDown component
import DropDown from '../components/DropDown';




const Ecommerce = () => {

  const {activeMenu, setActiveMenu, screenSize, mainColor, mainMode} = useContext(stateContext);

  return (
    <div className='mt-36 sm:mt-0'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        <div style={{backgroundSize:"70%"}}  className='relative h-44 m-3 p-8 pt-9 lg:w-80 bg-no-repeat bg-right bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full transition-colors'>
          <div className='absolute right-1 w-56 EarningsBg'>
            <EarningsBg color={mainColor} bgColor={mainMode}/>
          </div>
          <div className='flex justify-between items-center'>
            <div className='absolute EarningsText'>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-xl mt-1'>$63,448.78</p>
            </div>
            <div className='absolute EarningsDollarr p-3 rounded-full hover:drop-shadow-xl cursor-pointer transition-colors' style={{backgroundColor:mainColor}}><BsCurrencyDollar className='text-white text-2xl opacity-90 transition-colors'/></div>
          </div>

          <div className='mt-5 transition-colors absolute EarningsBtn'>
            <Button 
              text={"Download"}
              bgColor={mainColor}
              color={'white'}
              size={'14px'}
              borderRadius={"12px"}
            />
          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center items-center  gap-12 sm:gap-2'>
          {earningData.map((item) => (
            <div key={item.title} className='bg-white p-4 dark:text-gray-400 dark:bg-secondary-dark-bg h-44 md:w-56 rounded-2xl pt-6 cursor-pointer transition-colors'>
              <button 
              type='button'
              className='p-4 mb-4 rounded-full text-2xl opacity-90 '
              style={{color:item.iconColor, backgroundColor:item.iconBg ,boxShadow:item.boxShadow}}
              >
                {item.icon}
              </button>
              <div className='flex gap-3'>
                <span className='font-semibold w-14'>{item.amount}</span>
                <span className={`${item.pcColor} w-12`}>{item.percentage}</span>
              </div>
              <p className='text-sm text-gray-400 mt-2'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className='flex flex-wrap justify-center gap-10 '>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 transition-colors shadow-sm'>

            <div className=''>
              <p className='text-xl font-semibold'>Revenue Updates</p>
            </div>

            <div className='flex flex-wrap justify-center gap-10 mt-10'>
 
              <div className=" border-r-1 border-color m-4 pr-10 dark:border-slate-800">  
                <div className='flex flex-col gap-y-8'>
                  <div className='flex items-center gap-3 transition-colors'>
                      <Budget color={mainColor}/>
                      <div>
                        <p className='font-semibold text-3xl'>$85,000</p>
                        <span className='text-sm text-gray-600'>Budget</span>
                      </div>
                      <span className='bg-green-400 text-white text-xs p-2 rounded-full'>23%</span>
                  </div>

                  <div className='flex items-center gap-3 transition-colors '>
                      <Expense color={mainColor}/>
                      <div>
                        <p className='font-semibold text-3xl'>$20,500</p>
                        <span className='text-sm text-gray-600'>Budget</span>
                      </div>
                  </div>
                </div>

                <div className='mt-8 transition-colors'>
                  <SparkLine 
                    data={SparklineAreaData}
                    id='line-sparkline'
                    height="80px"
                    width="250px"
                    color={mainColor}
                    currentColor={mainColor}
                    type="Line"
                  />
                </div>

                <div className='mt-6 transition-colors'>
                  <Button
                    color={"white"}
                    bgColor={mainColor}
                    size={"16px"}
                    text={"Download Report"}
                    borderRadius="12px"
                  />
                </div>

              </div>

              <div>
                  <Stacked 
                    width={"320px"}
                    height={"360px"}
                    
                  />
              </div>

            </div>
          </div>

          <div className='flex flex-col items-center gap-y-4 mt-3 mx-3'>
            
            <div style={{backgroundColor: mainColor}} className='rounded-2xl p-4 md:w-400 shadow-sm'>
              <div className='flex justify-between items-center mt-3'>
                <p className="font-semibold text-white text-2xl">Earnings</p>
                <div >
                  <p className='text-white'>$63,448.78</p>
                  <p className='text-gray-400'>Monthly revenue</p>
                </div>
              </div>

              <div className='mt-8 mb-2 transition-colors w-full flex justify-center'>
                <SparkLine 
                  data={SparklineAreaData}
                  id='column-sparkline'
                  height="100px"
                  width="320px"
                  currentColor={mainColor}
                  type="Column"
                  color="rgb(242, 252, 253)"
                />
              </div>

            </div>

            <div className='bg-white w-350 md:w-400 dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl transition-colors shadow-sm '>
              <div className='flex justify-evenly items-center p-4 py-7'>
                <div className=''>
                  <p className='font-semibold text-2xl'>$43,246</p>
                  <p className='text-gray-400'>Yearly sales</p>
                </div>

                <div className=''>
                  <Pie 
                    data={ecomPieChartData}
                    id={"pie-chart-component"}
                    height={"150px"}
                    width={"150px"}
                    legendSettingsVisible={false}

                  />
                </div>

              </div>
            </div>
          </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl transition-colors">
          <div className='flex justify-between items-center gap-2 md:w-400'>
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={mainMode} data={dropdownData} id={"time"} />
          </div>

          <div className='mt-5 pb-5 flex flex-col gap-y-4'>
            {recentTransactions.map(item => (
              <div key={item.title} className='flex justify-between items-center'>
                <div className='flex gap-x-3 items-center'>
                  <button 
                  type='button' 
                  className='text-2xl p-4 rounded-2xl'
                  style={{color: item.iconColor ,backgroundColor: item.iconBg}}
                  >
                    {item.icon}
                  </button>
                  
                  <div>
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <div className={item.pcColor}>
                  {item.amount}
                </div>
              </div>
            ))}
          </div>

          <div className='pt-4 flex justify-between items-center border-t-1 dark:border-slate-800'>
              <Button 
                bgColor={mainColor}
                color={"white"}
                size={"14px"}
                text={"Add"}
                borderRadius={"12px"}
              />

              <p className='text-sm text-gray-400'>36 Recent Transactions</p>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl transition-colors">
            <div>
              <p className='text-xl font-semibold'>Buyers and sellers in the world</p>
              <p className='text-gray-400 text-sm mt-1'>Users from all over the world</p>
            </div>
              
            <Map />
        </div>


      </div>
      

    </div>
  )
}


export default Ecommerce;