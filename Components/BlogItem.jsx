import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({title,category,description,image,id}) => {
  return (
    <div className='transition-all duration-500 max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_7px_#000000]'>
        <Link href={`/blog/${id}`}>
        <Image src={image} alt='' width={400} height={400} className=' border border-black '/>
        </Link>
        <p className='mt-5 ml-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
        <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='md-3 text-sm tracking-tight text-gray-700 ' dangerouslySetInnerHTML={{__html:description.slice(0,120)}} ></p>
            <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                Read more <Image src={assets.arrow} width={12} className='ml-2' alt=''/>
            </Link>
        </div>
    </div>
  )
}

export default BlogItem