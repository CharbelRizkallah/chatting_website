import React from 'react'

const NoPhone = ({Element}) => {
  return (
    <div>
         
        {/* to prevent phone for now */}

      <div className='absolute lg:hidden flex justify-center items-center z-10 bg-cBlack h-full w-full'>
        <p className='text-cFirst text-center font-bold text-2xl'>Phone not supported for now {':('} <br/> Please try on desktop.</p>
      </div>

      <div className='absolute lg:flex hidden h-full w-full'>
        {Element}
      </div>
    </div>
  )
}

export default NoPhone