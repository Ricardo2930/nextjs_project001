"use client"

import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

import {Mails,ShoppingCart,Users2,LayoutDashboard, ChevronRight,} from "lucide-react"


export default function NavbarLayout() {

  // const [isCollapsed, setIsCollapsed] = useState(false);

  // function toggleSidebar () {
  //   setIsCollapsed(!isCollapsed)
  // }

  return (
    <div className="sm:flex sm:justify-between sm:h-screen">
      <div className="sm:min-w-[80px] border-r px-3 pb-5 sm:pb-10 sm:pt-4 bg-gray-200">
      <NavbarDashboard links={[
            // isCollapsed={isCollapsed},
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
              // {
              //   title: "Contacto",
              //   label: "",
              //   icon:Mails,
              //   variant: "ghost",
              //   href: "/dashboard/contacto"
              // },
            ]}/>
      </div>
    </div>
  )
}
