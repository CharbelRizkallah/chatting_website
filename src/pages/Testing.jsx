import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Testing = () => {

    const textArea = useRef(null);
    const textDiv = useRef(null);
    const [heightText, setHeightText] = useState(20);
    const [ogHeightText, setOgHeightText] = useState(20);
    const [count, setCount] = useState(0)

    const [file, setFile] = useState()

    useEffect(() => {
        // setHeightText(textArea.current.scrollHeight);
        // setOgHeightText(textArea.current.scrollHeight);
        // setCount(count+1);

    }, [])


    const onInput = (e) => {
        
        if(textArea.current.value !== '' && heightText >= ogHeightText){
            textArea.current.style.height = '0';
            if(textArea.current.scrollHeight >= ogHeightText){
                setHeightText(textArea.current.scrollHeight);
            }
            textArea.current.style.height = `${heightText}px`;
        }

    }

    
    const handleFile = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    

  return (
    <div className='w-full h-screen bg-cBlack flex items-center justify-center'>
        {/* <p className='text-cFirst m-2'>{heightText} {ogHeightText} {count}</p>
        <div ref={textDiv} className={`w-full h-fit flex justify-center bg-cGray`}>
            <textarea onInput={(e) => onInput(e)} ref={textArea} className={`resize-none w-[50%] min-h-[${ogHeightText}px`}></textarea>
        </div> */}

        <div className='p-6 h-fit w-fit bg-cGray flex items-center justify-center'>
            <label className='border border-2 border-cFirst bg-cGray text-cFirst rounded-lg hover:cursor-pointer p-2'>
                Upload Profile Picture
                <input className='hidden' onChange={handleFile} type='file' />
            </label>
            {/* <img src={file} /> */}
        </div>
        
    </div>
  )
}

export default Testing