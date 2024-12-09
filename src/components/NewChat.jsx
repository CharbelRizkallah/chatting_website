import React from 'react'

const NewChat = ( {startNewChat} ) => {
  return (

    <div className='w-[95%] h-[95%] m-2 rounded-lg flex flex-col items-center justify-center select-none'>

        <div className='flex items-center justify-center m-2'>
            <p className='text-cFirst text-2xl font-bold text-center'>Start a new chat!</p>
        </div>
        <div className='w-[50%] flex items-center justify-center m-2'>
            {/* Button to Chat */}
            <div className='bg-cFirst m-2 w-fit rounded-full p-2 px-6 text-cBlack font-bold hover:cursor-pointer select-none' onClick={() => startNewChat()}>
                New chat!
            </div>
        </div>
        
    </div>
  )
}

export default NewChat