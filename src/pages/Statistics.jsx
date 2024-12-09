import React from 'react'
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

const Statistics = () => {

    const [userCount, setUserCount] = useState(0)

    var socket


    useEffect(() => { 
      
      socket = io('http://localhost:5000');

      socket.on('userCount', c => { setUserCount(c)});

      return () => {
          socket.disconnect();
      };

    }, [])
    


  return (
    <div className='h-full w-full bg-cBlack flex items-center justify-center'>

        <div className=''>
            <p className='text-cFirst font-bold text-2xl'>User Count: {userCount} </p>
        </div>
        
    </div>
  )
}

export default Statistics