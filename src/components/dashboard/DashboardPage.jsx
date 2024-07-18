import React from 'react'
import Cards from "@/components/dashboard/Cards";
import DataTableUsers from "@/components/dashboard/DataTableUsers";




export default function DashboardPage() {
  return (
    <div className='text-gray-900'>
        <div className='flex justify-between items-center bg-gray-100 border-2 border-gray-500 rounded-xl p-4 mb-4 mt-2'>
          <div className='text-2xl font-semibold'>Bienvenido <strong className='text-blue-500 font-bold'>Miguel</strong></div>
          <button className='bg-blue-100 text-blue-500 text-lg font-extrabold p-4 rounded-full'>MA</button>
        </div>
        <Cards/>
        <DataTableUsers/>
    </div>
  )
}
