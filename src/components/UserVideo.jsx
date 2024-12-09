import React from 'react'

const UserVideo = ( {bgcolor, bgcolor2, user} ) => {
  return (
    <div className={`m-4 h-[45%] bg-${bgcolor} rounded-lg flex flex-col items-center justify-between resize-none overflow-hidden`}>
      
      <div className='h-[50%] w-full flex justify-center'>
        <div className='h-full aspect-square rounded-full overflow-hidden'><img src={user.pfp} className='object-contain' /></div>
        <div className='w-[50%] h-full text-center flex flex-col justify-center items-center'><p className='font-bold text-2xl'>{user.username}</p> <p className='font-semibold text-l'>{user.pronouns}</p></div>
      </div>
      
      <div className='h-[50%] w-full flex flex-col items-center text-l m-2'>
        <div className='h-fit flex items-center justify-center w-full'>
          <div className='h-[2px] w-[25%] border border-1 border-cBlack m-2'></div>
          <p className='font-bold text-xl m-2'>Likes & Hobbies:</p> 
          <div className='h-[2px] w-[25%] border border-1 border-cBlack m-2'></div>
        </div>
        <div className='w-full h-[90%] flex flex-wrap items-center justify-center resize-none overscroll-y-auto no-scrollbar overflow-auto'>
          {user.likes?.map((like, i) => {
            return <p key={i} className={`bg-${bgcolor2} px-2 py-1 border border-2 border-cBlack rounded-full font-semibold m-1`}>{like}</p>
          })}
        </div>
      </div>
    
    </div>
  )
}

export default UserVideo