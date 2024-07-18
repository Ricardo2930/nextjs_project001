import React from 'react'
import { columns } from "../../app/dashboard/users/columns"
import { DataTable } from "../ui/data-table"
import AvatarUsers from './AvatarsUsers';


async function getData(){
  const res = await fetch('https://dummyjson.com/users')
  const data = await res.json()
  const datas = data.users
  return datas
}

export default async function Tables() {
  const datas = await getData()
  return (
    <section className="flex flex-col xl:grid grid-cols-4 gap-5">
            <div className="bg-white rounded-xl xl:col-span-3">
                <div className="sm:items-center sm:justify-between p-5 border-2 border-gray-100 rounded-xl">
                    <h2 className="text-xl font-bold text-teal-500 bg-teal-100 inline-block py-1 px-5 rounded-md">Ordenes</h2>
                    <DataTable columns={columns} data={datas} />
                </div>
            </div>
            <div className='p-5 border-2 border-gray-100 rounded-xl bg-white'>
              <h2 className="text-xl font-bold text-orange-500 bg-orange-100 inline-block py-1 mb-5 px-5 rounded-md">Repartidevs</h2>
              <AvatarUsers/>  
              
        </div>
     
  </section>
  )
}
