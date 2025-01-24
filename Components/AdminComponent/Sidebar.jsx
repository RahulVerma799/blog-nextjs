import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-12 py-3 border border-black'>
            <Image src={assets.logo}  width={120} alt=''/>
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black '>
                    <div className='w-[50%] sm:w-[80%] absolute right-0'>

                     <Link href={'/admin/Addproduct'}>   
                    <div className='flex items-center border border-black gap-3 font-medium px-2 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                          <Image src={assets.add_icon} alt=''/><p>Add Blogs</p>
                    </div>
                    </Link>
                    
                    <Link href={'/admin/blogList'}>
                    <div className=' mt-4 flex items-center border border-black gap-3 font-medium px-2 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                          <Image src={assets.blog_icon} alt=''/><p>Blogs List</p>
                    </div>
                    </Link>
                    
                    <Link href={'/admin/subscription'}>
                    <div className=' mt-4 flex items-center border border-black gap-3 font-medium px-2 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                          <Image src={assets.email_icon} alt=''/><p>Subscription</p>
                    </div>
                    </Link>
            

            </div>

        </div>


    </div>
  )
}

export default Sidebar