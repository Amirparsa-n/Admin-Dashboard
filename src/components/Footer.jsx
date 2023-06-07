import React from 'react'

import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex justify-center py-16'>
      <p className='dark:text-white transition-colors text-lg flex items-center gap-x-1'>Made by Amirparsa Naghibi <AiOutlineCopyright /> 2023</p>
    </div>
  )
}

export default Footer