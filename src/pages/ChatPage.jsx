import React from 'react'
import { useState } from 'react'
import Options from '../components/Options'
import UserVideo from '../components/UserVideo'
import Chat from '../components/Chat'
import { useNavigate } from 'react-router-dom';
import LoadingChat from '../components/LoadingChat';
import NewChat from '../components/NewChat';
import Logo2 from '../images/lunar_chat_logo_yellow.png';

import { BiSolidHomeAlt2 } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import { TbMessageSearch } from 'react-icons/tb';
import { GoSmiley } from 'react-icons/go';





const ChatPage = ( {user} ) => {

  
  const navigate = useNavigate();
  const [state, setState] = useState('loading');
  
  const [otherUser, setOtherUser] = useState({pfp: Logo2,username: 'Alex', likes: ['Minecraft'], pronouns: 'She/Her'});

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const startNewChat = async () => {
    setState('loading');
    await delay(2000);
    setState('chat');
  }

  const disconnectChat = async () => {
    setState('newchat');
  }
  
  return (


    <div className='bg-cBlack h-screen w-full p-2'>

      {/* Header */}

      {/* <div className='w-full h-[10%]'>
        
        <div className='w-full flex justify-center items-center text-cFirst font-bold text-2xl m-2'>

          <div className='w-[5%] mx-2'>
            <img src={logo} alt='logo' className='object-contain'/>
          </div>

          <p className='mx-2'>Lunar Chat</p>

        </div>

      </div> */}

      {/* Content */}

      <div className='w-full h-full flex content-center'>

        {/* Left bar */}

        <div className='w-[5%] h-10/12 flex flex-col items-center justify-center mx-1'>
          <div className='w-full bg-cGray h-[25%] mx-1 my-2 rounded-lg flex flex-col justify-center items-center select-none'>
            

            {/* Home Button */}
            <div className='relative rounded-full p-2 bg-cFirst my-2 hover:cursor-pointer group' onClick={() => navigate("/")}>
              <span className='absolute transition-all duration-500 invisible opacity-0 left-[50%] group-hover:left-[120%]  group-hover:opacity-100 group-hover:visible bg-cGray text-cFirst top-1 px-1 py-2 rounded-lg border border-1 border-cFirst'>Home</span>
              <BiSolidHomeAlt2 size={32}/>
            </div>

            {/* Connect/Disconnect */}
            
            {
              state === 'newchat' ?
              <div className='relative rounded-full p-2 bg-cFirst my-2 hover:cursor-pointer group' onClick={() => startNewChat()}>
                <span className='absolute transition-all duration-500 invisible opacity-0 left-[50%] group-hover:left-[120%] group-hover:opacity-100 group-hover:visible bg-cGray text-cFirst top-1 px-1 py-2 rounded-lg border border-1 border-cFirst'>New&nbsp;Chat</span>
                <TbMessageSearch size={32}/>
              </div>
            :
              <div className='relative rounded-full p-2 bg-cFirst my-2 hover:cursor-pointer group' onClick={() => disconnectChat()}>
                <span className='absolute transition-all duration-500 invisible opacity-0 left-[50%] group-hover:left-[120%]  group-hover:opacity-100 group-hover:visible bg-cGray text-cFirst top-1 px-1 py-2 rounded-lg border border-1 border-cFirst'>Disconnect</span>
                <BiLogOut size={32}/>
              </div>


            }

          </div>
          
          <div className='w-full bg-cGray h-[70%] mx-1 my-2 rounded-lg flex justify-center overflow-y-auto no-scrollbar'>
            <div className='w-fit h-fit'>
              <Options />
              <Options />
              <Options />
              <Options />
              <Options />
              <Options />
              <Options />
              <Options />
              <Options />
              <Options />
              <Options />
              <Options />
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className='w-[60%] bg-cGray h-10/12 mx-1 my-2 rounded-lg flex items-center justify-center'>
          {state === 'loading' ? <LoadingChat /> : state === 'chat' ? <Chat user={user} otherUser={otherUser} /> : state === 'newchat' ? <NewChat startNewChat={startNewChat} /> : ''}
        </div>

        {/* Right section */}

        <div className='w-[35%] bg-cGray h-10/12 mx-1 my-2 rounded-lg flex flex-col justify-between'>

          { state === 'chat'?
            <UserVideo bgcolor={'cSecond'} bgcolor2={'cFirst'} user={otherUser} />
            :
            <div className={'m-4 h-[45%] bg-cSecond rounded-lg flex items-center justify-center resize-none overflow-hidden'}>

                <GoSmiley size={50} />

            </div>
          }
          <UserVideo bgcolor={'cFirst'} bgcolor2={'cSecond'} user={user} />
          {/* <div className='h-[50%] mx-2'>
            <Chat user={user} />
          </div> */}
        </div>

      </div>


    </div>
  )
}

export default ChatPage