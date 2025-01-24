'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'


const page = () => {

    const [image,setImage]=useState(false)
    const [data,setData]=useState({
      title:"",
      description:"",
      category:"Startup",
      author:"Alex bennett",
      authorImg:"/author_img.png"
    })

    const changeHandler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData(data=>({...data,[name]:value}));
      console.log(data);

    };

    async function submitHandler(e){
      e.preventDefault();
      const formData= new FormData();
      formData.append('title',data.title);
      formData.append('description',data.description);
      formData.append('category',data.category);
      formData.append('author',data.author);
      formData.append('authorImg',data.authorImg);
      formData.append('image',image);

      const response=await axios.post('/api/blog',formData);

      if(response.data.success){
        toast.success(response.data.msg)
        setImage(false);
        setData({
          title:"",
          description:"",
          category:"Startup",
          author:"Alex bennett",
          authorImg:"/author_img.png"
        })
        
      }
      else{
        toast.error("Error")
      }


    };

  return (
    <>
        <form onSubmit={submitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
            <p className='text-xl'>Upload thumbnail</p>
                <label htmlFor='image'>
                    <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>

                </label>

                <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
                <p className='text-xl mt-4'>Blog title</p>
                <input onChange={changeHandler} name='title' value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-gray-400' type='text' placeholder='enter the title' required/>

                <p className='text-xl mt-4'>Blog Description</p>
                <textarea onChange={changeHandler} name='description' value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-gray-400' type='text' placeholder='enter the description' row={4} required/>
                

                <p className='text-xl mt-4'>Blog category</p>
                <select onChange={changeHandler} value={data.category} name='category' className='w-40 mt-4 px-3 py-4 border border-gray-400'>
                  <option value='Startup'>Startup</option>
                  <option value='Technology'>Technology</option>
                  <option value='Lifestyle'>Lifestyle</option>
                  
                </select>
                <br/>
                <button type='submit' className='mt-8 w-40 h-12 bg-black rounded-lg text-white border border-yellow'>Add</button>
                
            
        </form>
    </>
  )
}

export default page