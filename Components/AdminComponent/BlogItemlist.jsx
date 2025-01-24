import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogItemlist = ({authorImg,title,author,date,deleteBlog,mongoId}) => {

        const blogDate=new Date(date);

  return (
        <tr className='bg-white border-b'>
            <th scope='row' className='item center gap-3 hidden sm:flex px-4 py-5 font-medium text-gray-900'>
                <Image width={40} height={40} src={authorImg?authorImg:assets.profile_icon}/>
                <p>{author?author:'No author'}</p>
            </th>
            <td className='px-6 py-4'>
                    {title?title:'no title'}
            </td>

            <td className='px-6 py-4'>
                {blogDate.toDateString()}
            </td>

            <td onClick={()=>deleteBlog(mongoId)} className='px-3 py-3 cursor-pointer hover:font-bold'>
                X
            </td>

        </tr>
  )
}

export default BlogItemlist