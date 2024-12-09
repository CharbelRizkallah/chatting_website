import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/lunar_chat_logo_yellow.png';
import Likes from '../components/Likes';

const Home = ( { changeUsername, changeLikes, changePronouns, changePfp } ) => {
    
    const navigate = useNavigate();
    const username = useRef(null);
    const likes = useRef(null);
    const pronouns = useRef(null);

    const [likesArray, setLikesArray] = useState([]);
    const [file, setFile] = useState();
    var newLike = true;
    
    useEffect(() => {
        username.current.value = JSON.parse(localStorage.getItem('username'));
        pronouns.current.value = JSON.parse(localStorage.getItem('pronouns'));
        if (JSON.parse(localStorage.getItem('likes')) !== null) { setLikesArray(JSON.parse(localStorage.getItem('likes'))); }
        setFile(JSON.parse(localStorage.getItem('pfp')));
    }, [])
    

    

    const handleButton = (path) => {
        if(likesArray.length > 0){
            changeLikes(likesArray);
        }
        if (file !== null && file !== ''){
            changePfp(file);
        }
        if(username.current.value.trim() !== null && username.current.value.trim() !== ''){
            changeUsername(username.current.value.trim());
            localStorage.setItem('username', JSON.stringify(username.current.value.trim()));
        }
        if(pronouns.current.value.trim() !== null && pronouns.current.value.trim() !== ''){
            changePronouns(pronouns.current.value.trim());
            localStorage.setItem('pronouns', JSON.stringify(pronouns.current.value.trim()));
        }
        localStorage.setItem('likes', JSON.stringify(likesArray));
        navigate(path);
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter' ){

            handleButton("/chat");
      
          }
    }
    

    const handleEnterLikes = (e) => {
        if(e.key === 'Enter'){
            if(likes.current.value.trim() !== null && likes.current.value.trim() !== ''){
                likesArray.map((like) => {
                    if (like === likes.current.value.trim()){
                        newLike = false;
                        console.log(likes.current.value.trim() + ' ' + newLike)
                    }
                })
                if(newLike){
                    setLikesArray([...likesArray,likes.current.value.trim()]);
                }
                newLike = true;
                likes.current.value = '';
            }else{
                handleButton("/chat");
            }
        }
    }

    const removeLike = (like) => {

        let array = likesArray.filter(function( l ) {
            return l !== like;
          });

        setLikesArray(array);

    }

    const handleFile = (e) => {

        const reader = new FileReader();

        reader.addEventListener("load", () => {
            localStorage.setItem('pfp', JSON.stringify(reader.result));
            changePfp(reader.result);
            setFile(reader.result);
        });

        reader.readAsDataURL(e.target.files[0]);

    }


  return (
    <div className='w-full h-screen bg-cBlack flex items-center justify-between'>
        
        {/* Left */}
        <div className='w-[50%] h-full flex flex-col items-center justify-center'>
            <div className='w-full h-[50%] flex items-end justify-center my-2'>
                {/* Logo */}
                <div className='h-[50%] aspect-square rounded-full mx-2'>
                    <img className='' src={logo} alt='Logo' />
                </div>
                <div className='h-[25%] mx-2 flex items-end'>
                    <h1 className='text-cFirst text-[400%] font-bold'>Lunar Chat</h1>
                </div>
            </div>

            <div className='w-full h-[50%] flex items-start justify-center my-2'>
                <p className='w-[75%] text-center text-cFirst text-[150%] font-bold'>The best chatroom website on the internet!</p>
            </div>
        </div>

        {/* Right */}
        <div className='w-[50%] h-full flex items-center justify-center'>

            <div className='w-fit h-fit px-12 py-6 flex flex-col items-center justify-center bg-cGray rounded-lg'>

                <div className='flex items-center justify-center w-full h-fit mb-2'>
                    <p className='text-cFirst text-2xl font-bold'>Please Enter:</p>
                </div>

                <div className='flex items-center justify-between h-fit m-2'>

                    <div className='w-[55%]'>
                        {/* Username */}
                        <p className='text-center text-cFirst text-xl font-bold'>Your username:</p>
                        <div className='m-2 h-fit w-full border border-2 border-cFirst rounded-full'>
                            <input ref={username} type='text' className='w-full bg-transparent focus:outline-none caret-cSecond text-cSecond my-1 mx-2 text-center' onKeyDown={(e) => handleEnter(e)}/>
                        </div>
                    </div>

                    <div className='w-[40%]'>
                        {/* Pronouns */}
                        <p className='text-center text-cFirst text-xl font-bold'>Your Pronouns:</p>
                        <div className='m-2 h-fit w-full border border-2 border-cFirst rounded-full'>
                            <input ref={pronouns} type='text' className='w-full bg-transparent focus:outline-none caret-cSecond text-cSecond my-1 mx-2 text-center' onKeyDown={(e) => handleEnter(e)}/>
                        </div>
                    </div>
                </div>
                

                <div className='m-2 w-full flex flex-col items-center justify-center'>
                    {/* Likes */}
                    <p className='text-center text-cFirst text-xl font-bold'>Your Likes & Hobbies:</p>
                    <div className='m-2 h-fit w-[75%] border border-2 border-cFirst rounded-full'>
                        <input type='text' ref={likes} className=' w-full bg-transparent focus:outline-none caret-cSecond text-cSecond text-center p-2' onKeyDown={(e) => handleEnterLikes(e)}/>
                    </div>
                    <div className='w-[75%] flex flex-wrap items-center justify-center '>
                        {likesArray?.map((like, i) => {
                        return <Likes key={i} like={like} removeLike={removeLike} />
                        })}
                    </div>
                </div>
                

                <div className='flex items-center justify-center'>
                    
                    {/* Upload Pfp */}
                    <div className='flex items-center w-fit resize-none'>
                        <label className='h-fit w-fit border border-2 border-cFirst bg-cGray text-cFirst rounded-full hover:cursor-pointer p-2'>
                            Upload Profile Picture
                            <input className='hidden' onChange={handleFile} type='file' />
                        </label>
                    </div>

                    
                    {/* Button to Chat */}
                    <div className='bg-cFirst m-2 w-fit rounded-full p-2 px-3 text-cBlack font-bold hover:cursor-pointer select-none' onClick={() => handleButton("/chat")}>
                        To Chat
                    </div>

                </div>

                {file?
                <div className='flex justify-center items-center m-2'>
                    <div className='w-32 aspect-square border border-2 border-cFirst rounded-full overflow-hidden'>
                        <img src={file} className='object-cover' />
                    </div>
                </div>
                : ''}


                <div className='flex justify-center items-end w-full'>
                    <p className='text-cSecond text-l'>None of the fields are mandatory, you can leave any of them empty.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home