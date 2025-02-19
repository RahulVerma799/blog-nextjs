'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { use } from 'react'; // Import `use` to unwrap the promise.

const page = ({ params: paramsPromise }) => {
    const params = use(paramsPromise); // Unwrap the `params` promise.
    const [data, setData] = useState(null);

    const fetchBlogsite = async () => {
        if (!params?.id) return; // Ensure `params.id` exists before making the API call.
        try {
            const response = await axios.get('/api/blog', {
                params: {
                    id: params.id,
                },
            });
            setData(response.data);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    useEffect(() => {
        fetchBlogsite();
    }, [params.id]); // React to changes in `params.id`.

   
  return (data?<>
    <div className='bg-gray-200 px-5 py-5 md:px-15 lg:px-28'>
        <div className='flex
        items-center justify-between '>
            <Link href={'/'}>
            <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-auto'/>
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black rounded-lg hover:bg-white hover:text-1xl hover:shadow-[-7px_7px_7px_#000000]' >Get Started<Image src={assets.arrow} alt=''/></button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt=''/>
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
        </div>

        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='g'/>
               
                <p>{data.description}</p>
              
                <div className='my-24'>
                    <h1 className='text-black font font-semibold my-4'>Share this article on social media</h1>
                        <p className='flex'>
                            <Image src={assets.facebook_icon} width={50} alt='c'/>
                            <Image src={assets.twitter_icon} width={50} alt='b'/>
                            <Image src={assets.googleplus_icon} width={50} alt='a'/>
                        </p>
                </div>
 
        </div>
        <Footer/>

    </>:<></>
  )
}

export default page