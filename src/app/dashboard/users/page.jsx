import { columns } from "./columns";
import { DataTable } from "../../../components/ui/data-table";
import { ShieldCheck, ShoppingCart, Users } from "lucide-react";
import AvatarRepartidevs from "@/components/dashboard/AvatarsRepartidevs";

async function getData() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  const datas = data.users;
  return datas;
}

export default async function DemoPage() {
  const datas = await getData();

  return (
    <section className="container max-w-full flex flex-col gap-5 p-5 bg-slate-50">
      <div className=" rounded-xl">
        <h2 className="text-3xl font-semibold text-orange-500 bg-orange-100 text-center sm:inline-block p-2 px-5 rounded-md border-b-2 border-orange-500">
          Repartidevs
        </h2>
        <AvatarRepartidevs />
        <DataTable columns={columns} data={datas} />
      </div>

      <div className="grid sm:grid sm:grid-cols-3 gap-5 text-center">
        <div className="bg-orange-100 text-orange-500 border-2 border-orange-500 rounded-xl p-5 grid gap-2">
          <Users className="" />
          <h3 className="text-xl font-semibold">Repartidevs</h3>
          <h3 className="text-6xl font-semibold">120</h3>
          <h3 className="text-green-500 font-bold">+10%</h3>
        </div>

        <div className="bg-teal-100 text-teal-500 border-2 border-teal-500 rounded-xl p-5 grid gap-2">
          <ShoppingCart />
          <h3 className="text-xl font-semibold">Pedidos</h3>
          <h3 className="text-6xl font-semibold">220</h3>
          <h3 className="text-green-500 font-bold">+10%</h3>
        </div>

        <div className="bg-gray-100 text-gray-500 border-2 border-gray-500 rounded-xl p-5 grid gap-2">
          <ShieldCheck />
          <h3 className="text-xl font-semibold">Servicios</h3>
          <h3 className="text-6xl font-semibold">100</h3>
          <h3 className="text-green-500 font-bold">+10%</h3>
        </div>
      </div>
    </section>
  );
}
