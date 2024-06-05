import React from 'react'
import { columns } from "../../app/dashboard/users/columns"
import { DataTable } from "../ui/data-table"

async function getData(){
  // Fetch data from your API here.
  const res = await fetch('https://dummyjson.com/users')
  const data = await res.json()
  const datas = data.users
  return datas
}

export default async function Tables() {
  const datas = await getData()
  return (
    <section className="flex flex-col lg:grid grid-cols-4 gap-5">
            <div className="bg-white rounded-xl lg:col-span-3">
                <div className="sm:items-center sm:justify-between p-5 border-2 border-gray-100 rounded-xl">
                    <h2 className="text-xl font-bold text-orange-500 bg-orange-100 inline-block py-1 px-5 rounded-md">Users</h2>
                    <DataTable columns={columns} data={datas} />
                </div>
            </div>
            <div>

              
            </div>
     
  </section>
  )
}
