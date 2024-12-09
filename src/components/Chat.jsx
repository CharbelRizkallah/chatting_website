import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Chat = ( { user, otherUser } ) => {

  const chatbox = useRef(null);
  const messageInput = useRef(null);
  const inputDiv = useRef(null);
  const [inputHeight, setInputHeight] = useState(8);
  const [chatHeight, setChatHeight] = useState(88);
  const [heightText, setHeightText] = useState(20);
  const [ogHeightText, setOgHeightText] = useState(20);
  const [prevHeightText, setPrevHeightText] = useState(20);
  const [alreadySent, setAlreadySent] = useState(false);
  


  useEffect(() => {
    
    setHeightText(messageInput.current.scrollHeight);
    setOgHeightText(messageInput.current.scrollHeight);
    setPrevHeightText(messageInput.current.scrollHeight);


    messageInput.current.addEventListener('keydown', function (e) {
      // Get the code of pressed key
      const keyCode = e.which || e.keyCode;
  
      // 13 represents the Enter key
      if (keyCode === 13 && !e.shiftKey) {
          // Don't generate a new line
          e.preventDefault();
  
      }

      // 8 represents the Backspace key
      if (keyCode === 8 && e.ctrlKey) {
        
        // console.log(true);
        
        messageInput.current.value = '';
        


        setChatHeight(88);
        setInputHeight(8);
        setHeightText(ogHeightText);
        setPrevHeightText(ogHeightText);
        messageInput.current.style.height = '0';
        messageInput.current.style.height = `95%`;

        inputDiv.current.style.height = `${inputHeight}%`;
        chatbox.current.style.height=`${chatHeight}%`;
        
      }

      if(e.key === "Backspace"){
        handleInput(e)
      }
    });

  
  
  }, [])
  

  const sendMsg = () => {

    const message = messageInput.current.value.trim();

    if(message === '')
      return;

    const mess = document.createElement("div");
    if(alreadySent){
      mess.innerHTML = `<div class='flex items-start justify-start mx-2'><div class='px-7 mx-2'></div><div class='w-[90%] mx-2 flex-col items-center justify-center'><p class='text-cFirst' >${message}</p></div></div>`;
    }else{
      mess.innerHTML = `<div class='flex items-start justify-start mt-2 mx-2'><div class='w-14 mx-2 aspect-square rounded-full overflow-hidden'><img src='${user.pfp}' class='object-contain' /></div><div class='mx-2 h-14 flex flex-col items-start justify-end text-start'><p class='text-cFirst text-l font-bold'>${user.username}</p><p class='text-cFirst'>${message}</p></div></div>`;
    }

    chatbox.current.appendChild(mess);

    messageInput.current.value = '';

    chatbox.current.scrollTop = chatbox.current.scrollHeight;
    setAlreadySent(true);
  }

  const handleInput = (event) => {

    if(heightText >= ogHeightText){
      messageInput.current.style.height = '0';
      if(messageInput.current.scrollHeight >= ogHeightText){
          setHeightText(messageInput.current.scrollHeight);
      }
      if(heightText > prevHeightText && inputHeight < 40){
        setInputHeight(inputHeight+4);
        setChatHeight(chatHeight-4);

        setPrevHeightText(heightText);
      }else if(heightText < prevHeightText && inputHeight >= 8){
        setInputHeight(inputHeight-4);
        setChatHeight(chatHeight+4);

        setPrevHeightText(heightText);
      }
      messageInput.current.style.height = `95%`;
      inputDiv.current.style.height = `${inputHeight}%`;
      chatbox.current.style.height=`${chatHeight}%`;
      // console.log(`${Math.floor(heightText*100/Math.floor(ogHeightText/0.08))}%`);
      // console.log(heightText + ' ' + ogHeightText + ' ' + messageInput.current.scrollHeight);
    }else {
      setHeightText(ogHeightText);
    }

    // if(messageInput.current.value === ''){
      
    //   setChatHeight(88);
    //   setInputHeight(8);
    //   setHeightText(ogHeightText);
    //   setPrevHeightText(ogHeightText);

    //   inputDiv.current.style.height = `${inputHeight}%`;
    //   chatbox.current.style.height=`${chatHeight}%`;
    // }

    
    chatbox.current.scrollTop = chatbox.current.scrollHeight;
    
  }



  const handleEnter = (event) => {
    
    if(event.key === 'Enter' && !event.shiftKey ){

      sendMsg();

      setChatHeight(88);
      setInputHeight(8);
      setHeightText(ogHeightText);
      setPrevHeightText(ogHeightText);

      inputDiv.current.style.height = `${inputHeight}%`;
      chatbox.current.style.height=`${chatHeight}%`;

    }

  }
  

  



  return (
    <div className='w-[95%] h-[95%] m-2 rounded-lg'>
        <div className='w-full h-full flex flex-col justify-between items-center'>
          <div ref={chatbox} className={'w-full h-[88%] border border-2 border-cSecond rounded-lg overflow-auto no-scrollbar whitespace-break-spaces break-words'}>
            
          <div className='flex items-start justify-start mt-2 mx-2'>
            <div className='w-14 mx-2 aspect-square rounded-full overflow-hidden'><img src={user.pfp} className='object-contain' /></div>
            <div className='mx-2 h-14 flex flex-col items-start justify-end text-start'>
              <p className='text-cFirst text-l font-bold'>{user.username}</p>
              <p className='text-cFirst'>Hello, my name is Steve!</p>
            </div>
          </div>
            
            
          <div className='flex items-start justify-start mt-2 mx-2'>
            <div className='w-14 mx-2 aspect-square rounded-full overflow-hidden'><img src={otherUser.pfp} className='object-contain' /></div>
            <div className='mx-2 h-14 flex flex-col items-start justify-end text-start'>
              <p className='text-cSecond text-l font-bold'>{otherUser.username}</p>
              <p className='text-cSecond'>Hello Steve, my name is Alex!</p>
            </div>
          </div>
            
          </div>

          <div ref={inputDiv} className={'w-full h-[8%] rounded-lg flex justify-center items-center border border-2 border-cFirst px-2'}>
            
            <textarea spellCheck='true' placeholder='Message' 
            onChange={(e) => handleInput(e)} onKeyDown={(e) => handleEnter(e)} ref={messageInput} 
            className='w-[95%] h-[95%] mr-1 border-r border-1 border-cFirst bg-transparent overflow-auto no-scrollbar resize-none focus:outline-none caret-cSecond text-[95%] text-cSecond p-2'/>
            
            <div className='ml-1 rounded-full w-[5%] flex items-center justify-center hover:cursor-pointer' onClick={sendMsg}>
              <AiOutlineSend size={"95%"} color='#eab308'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Chat