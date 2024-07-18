"use client"

import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import {ShoppingCart,Users2,LayoutDashboard} from "lucide-react"


export default function NavbarLayout() {
  return (
    <div className="sm:flex sm:justify-between bg-gray-10">
      <div className="min-w-full lg:min-w-[80px] border- px-3 pb-5 lg:pb-10 sm:pt-4">
      <NavbarDashboard links={[
              {
                title: "Dashboard",
                label: "",
                icon: LayoutDashboard,
                variant: "default",
                href: "/dashboard"
              },
              {
                title: "Orders",
                label: "",
                icon: ShoppingCart,
                variant: "ghost",
                href: "/dashboard/orders"
              },
              {
                title: "Repartidevs",
                label: "",
                icon:Users2,
                variant: "ghost",
                href: "/dashboard/users"
              },
            ]}/>
      </div>
    </div>
  )
}
