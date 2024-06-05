import { columns } from "./columns"
import { DataTable } from "../../../components/ui/data-table"

async function getData(){
  // Fetch data from your API here.
  const res = await fetch('https://dummyjson.com/users')
  const data = await res.json()
  const datas = data.users
  return datas
}

export default async function DemoPage() {
  const datas = await getData()

  return (
    <section className="container p-5">
      <div>
        <h1 className="text-4xl font-bold">Users</h1>
      </div>  
      <DataTable columns={columns} data={datas} />
    </section>
  )
}
