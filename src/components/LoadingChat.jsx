import React from 'react'
import Loading_gif from '../images/loading_gif_first.gif';

const LoadingChat = () => {
  return (
    <div className='w-[95%] h-[95%] m-2 rounded-lg flex flex-col items-center justify-center select-none'>
        <div className='flex items-center justify-center m-2'>
            <p className='text-cFirst text-2xl font-bold text-center'>Searching for a new person for you to meet!</p>
        </div>
        <div className='w-[50%] flex items-center justify-center m-2'>
            <img src={Loading_gif} className='w-[10%]'/>
        </div>
        
    </div>
  )
}

export default LoadingChat