"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {Tooltip,TooltipTrigger,TooltipContent, TooltipProvider} from "@/components/ui/tooltip"
import { UserButton  } from "@clerk/nextjs";
import {usePathname} from 'next/navigation'

export default function NavbarDashboard({ links, isCollapsed }) {

  const pathname = usePathname();


  return (
    <TooltipProvider>
    <div
      data-collapsed={isCollapsed}
      className="group sm:flex sm:flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <div className="sm:flex sm:gap-1 items-center bg-white p-2 rounded-xl text-center">
      <UserButton afterSignOutUrl="/"/> 
      <div>
      <p className="font-medium text-gray-900">Miguel Angel</p>
      <p className="text-xs text-gray-500">midudev@gmail.com</p>
      </div>
      </div>
      <nav className="grid grid-cols-2 gap-5 sm:gap-x-12 sm:gap-y-6 sm:grid sm:grid-cols-1 sm:gap-5 mt-5 sm:mt-5 px-1">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ 
                      variant: link.href === pathname ? 'default': 'ghost', 
                      size: "icon" }),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({ variant: link.href === pathname ? 'default': 'ghost', size: "sm" }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
        
      </nav>
      
    </div>
  </TooltipProvider>
  )
}

