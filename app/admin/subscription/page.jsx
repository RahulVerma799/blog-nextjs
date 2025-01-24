'use client'
import Subscription from '@/Components/AdminComponent/Subscription'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

  const [emails,setEmails]=useState([]);

  const fetchEmal=async()=>{
    const response= await axios.get("/api/email")
    setEmails(response.data.emails)
  }

  const detelid=async(mongoId)=>{
    const resp=await axios.delete('/api/email',{params:{id:mongoId}})
    if(resp.data.success){
      toast.success(resp.data.msg)
      fetchEmal();
    }
    else{
      toast.error("Error")
    }

  } 

  useEffect(()=>{fetchEmal()},[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
        <h2>All Subcription</h2>
        <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-600 scrollbar-hidden'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-3' >
                  Email subscription
                </th>

                <th scope='col' className='hidden sm:block px-6 py-3' >
                 Date
                </th>

                <th scope='col' className='px-6 py-3' >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
           
                   {emails.map((item, index) => (
                 <Subscription 
                key={item._id} 
                mongoId={item._id} 
                email={item.email} 
              date={item.date}
              deleteEmail={detelid} 
               />
                 ))}

           
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default page