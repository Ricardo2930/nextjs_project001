import { UserCheck, ShoppingCart, Users, Hotel } from "lucide-react"


export default function Cards() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7 text-center">

      <div className="bg-blue-100 text-blue-500 border-2 border-blue-500 rounded-xl p-5 grid gap-2">
        <UserCheck className=""/>
          <h3 className="text-2xl font-semibold">Users</h3>
          <h3 className="text-7xl font-semibold">120</h3>
          <h3 className="text-green-500 font-bold">+10%</h3>
        </div>

        <div className="bg-gray-100 text-gray-500 border-2 border-gray-500 rounded-xl p-5 grid gap-2">
         <ShoppingCart />
          <h3 className="text-2xl font-semibold">Orders</h3>
          <h3 className="text-7xl font-semibold">320</h3>
          <h3 className="text-green-500 font-bold">+10%</h3>
        </div>

        <div className="bg-orange-100 text-orange-500 border-2 border-orange-500 rounded-xl p-5 grid gap-2">
        <Users />
          <h3 className="text-2xl font-semibold">Repartidevs</h3>
          <h3 className="text-7xl font-semibold">100</h3>
          <h3 className="text-green-500 font-bold">+10%</h3>
        </div>

        <div className="bg-cyan-100 text-cyan-500 border-2 border-cyan-500 rounded-xl p-5 grid gap-2 text-center">
          <Hotel />
          <h3 className="text-xl font-semibold">Condominios</h3>
          <h3 className="text-5xl font-semibold">04</h3>
          <div className=" grid grid-cols-2 sm:grid-cols-2 gap-2 items-center justify-between text-center">
                <div className="items-center bg-blue-100 p-2 rounded-xl cursor-pointer">
                        <span className="text-blue-500 font-medium text-base lg:text-sm">Olivos</span>
                </div>
                <div className="items-center bg-red-100 p-2 rounded-xl cursor-pointer">
                <span className="text-red-500 font-medium text-base lg:text-sm">Esmeralda</span>
                </div>
                <div className="items-center bg-green-100 p-2 rounded-xl cursor-pointer">
                <span className="text-green-500 font-medium text-base lg:text-sm">Rubies</span>
                </div>
                <div className="items-center bg-orange-100 p-2 rounded-xl cursor-pointer">
                <span className="text-orange-500 font-medium text-base lg:text-sm">Gardenias</span>
                </div>
          </div>
        </div>
      </section>
  )
}
