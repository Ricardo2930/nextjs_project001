"use client"

import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

import {Mails,ShoppingCart,Users2,LayoutDashboard, ChevronRight,} from "lucide-react"


export default function NavbarLayout() {

  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidebar () {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="flex justify-between sm:h-screen">
      <div className="relative sm:min-w-[80px] border-r px-3 pb-5 sm:pb-10 sm:pt-24 bg-gray-400">
      <div className="absolute right-2 top-2 sm:right-[-20px] sm:top-7">
        {/* <Button variant="secondary" className="rounded-full p-2" onClick={toggleSidebar}>
          <ChevronRight/>
        </Button> */}
      </div>
      <NavbarDashboard links={[
            // isCollapsed={isCollapsed}
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
              {
                title: "Contacto",
                label: "",
                icon:Mails,
                variant: "ghost",
                href: "/dashboard/contacto"
              },
            ]}/>
      </div>
    </div>
  )
}
