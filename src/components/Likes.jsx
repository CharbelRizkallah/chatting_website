import React from 'react'

const Likes = ({like, removeLike}) => {
  return (
    <div onClick={() => removeLike(like)} className='hover:cursor-pointer'>
        <p className={'px-2 py-1 border border-2 border-cSecond text-cFirst rounded-full font-semibold m-1'}>{like}</p>
    </div>
  )
}

export default Likes