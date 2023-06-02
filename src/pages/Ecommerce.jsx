import React, {useContext} from 'react'

import Radium from 'radium';

// icons
import { BsCurrencyDollar } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import Expense from '../assets/image/Expense';
import Budget from '../assets/image/Budget';

import { Stacked, Pie, Button, SparkLine } from '../components/export';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/Data';


// Context
import { stateContext } from '../contexts/ContextProvide';

const Ecommerce = () => {

  const {activeMenu, setActiveMenu, screenSize} = useContext(stateContext);

  return (
    <div className='mt-36 sm:mt-0'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        <div style={{backgroundSize:"70%"}}  className='bg-hero-pattern h-44 m-3 p-8 pt-9 lg:w-80 bg-no-repeat bg-right bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full'>

          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-xl mt-1'>$63,448.78</p>
            </div>
            <div className='p-3 rounded-full hover:drop-shadow-xl cursor-pointer' style={{backgroundColor:'blue'}}><BsCurrencyDollar className='text-white text-2xl opacity-90'/></div>
          </div>

          <div className='mt-5'>
            <Button 
              text={"Download"}
              bgColor={"blue"}
              color={'white'}
              size={'14px'}
              borderRadius={"12px"}
            />
          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center items-center gap-2'>
          {earningData.map((item) => (
            <div key={item.title} className='bg-white p-4 dark:text-gray-400 dark:bg-main-dark-bg h-44 md:w-56 rounded-2xl pt-6 cursor-pointer'>
              <button 
              type='button'
              className='p-4 mb-4 rounded-full text-2xl opacity-90 '
              style={{color:item.iconColor, backgroundColor:item.iconBg ,boxShadow:item.boxShadow}}
              >
                {item.icon}
              </button>
              <div className='flex gap-3'>
                <span className='font-semibold'>{item.amount}</span>
                <span className={`text-${item.pcColor}`}>{item.percentage}</span>
              </div>
              <p className='text-sm text-gray-400 mt-2'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className='flex flex-wrap justify-center gap-10 '>
          <div className='bg-white dark:text-gray-200 dark:bg-main-dark-bg m-3 p-4 rounded-2xl md:w-780'>

            <div className=''>
              <p className='text-xl font-semibold'>Revenue Updates</p>
            </div>

            <div className='flex flex-wrap justify-center gap-10 mt-10'>

              <div className=" border-r-1 border-color m-4 pr-10">  
                <div className='flex flex-col gap-y-8'>
                  <div className='flex items-center gap-3'>
                      <Budget color={"blue"}/>
                      <div>
                        <p className='font-semibold text-3xl'>$85,000</p>
                        <span className='text-sm text-gray-600'>Budget</span>
                      </div>
                      <span className='bg-green-400 text-white text-xs p-2 rounded-full'>23%</span>
                  </div>

                  <div className='flex items-center gap-3'>
                      <Expense color={"blue"}/>
                      <div>
                        <p className='font-semibold text-3xl'>$20,500</p>
                        <span className='text-sm text-gray-600'>Budget</span>
                      </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <SparkLine 
                    data={SparklineAreaData}
                    id='line-sparkline'
                    height="80px"
                    width="250px"
                    color="blue"
                    currentColor="blue"
                    type="Line"
                  />
                </div>

                <div className='mt-6'>
                  <Button
                    color={"white"}
                    bgColor={"blue"}
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
      </div>


    </div>
  )
}

{/* <Expense color={"blue"}/>
<Budget color={"blue"}/> */}

export default Ecommerce;