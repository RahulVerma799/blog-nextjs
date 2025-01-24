import React from 'react'

const Subscription = ({email,mongoId,date,deleteEmail}) => {
    const emailDate= new Date(date)
  return (
   <tr className='bg-white border-b text-left'>
        <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:'No email'}
        </th>
        <td className='px-6 py-3 hidden sm:block'>{emailDate.toDateString()}</td>
        <td className='px-6 py-3 cursor-pointer' onClick={()=>deleteEmail(mongoId)}>X</td>
   </tr>
  )
}

export default Subscription