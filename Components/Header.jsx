import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Header = () => {

            const [email,setEmail]=useState('');

            async function changeHandler(event){
                event.preventDefault(); 

                const formData= new FormData();
                formData.append('email',email)
                const response= await axios.post('/api/email',formData)
                if(response.data.success){
                    toast.success(response.data.msg)
                    setEmail('');
                }
                else{
                    toast.error("error");
                }


            };


  return (
    <div className='py-5 px-5 md:px-12 lg:px-28 '>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='img' className='w-[130px] sm:w-auto'/>
            <button  className='
    flex items-center gap-2 font-medium 
    py-1 px-2 sm:py-3 sm:px-6 
    border rounded-lg border-solid border-black 
    hover:bg-slate-200 hover:shadow-[-7px_7px_0px_#000000] 
    transition-all duration-300 ease-in-out' >Get Started<Image src={assets.arrow}/></button>
        </div>
                <div className='text-center my-8'>
                    <h1 className='text-3xl sm:text-3xl font-medium'>Latest Blogs</h1>
                    <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
                    A sleek, modern blogging website designed for simplicity and functionality. Share your thoughts, stories, and updates with a clean interface that ensures readers focus on your content. Perfect for personal bloggers, writers, and professionals seeking a space to showcase their ideas.
                    </p>
                    <form  onSubmit={changeHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-gray-500 shadow-[-7px_7px_0px_#000000]'>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' placeholder='enter your email' className='pl-4 outline-none'/>
                        <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-500 active:text-white'>Subscribe</button>
                    </form>
                </div>
      
        </div>
  )
}

export default Header