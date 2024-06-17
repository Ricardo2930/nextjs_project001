"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function NavbarDashboard({ links }) {
  const pathname = usePathname();

  return (
    <section>
      <div
        className="group sm:grid sm:grid-cols-3 lg:flex lg:flex-col gap-4 py-2"
      >
        <div className="flex gap-20 sm:gap-10 lg:gap-1 items-center bg-white p-2 rounded-xl text-center">
          <UserButton afterSignOutUrl="/" />
          <div className="">
            <p className="font-medium text-gray-900">Miguel Angel</p>
            <p className="text-xs text-gray-500">midudev@gmail.com</p>
          </div>
        </div>
        <nav className="grid grid-cols-3 sm:col-span-2 gap-2 lg:gap-x-12 lg:gap-y-6 lg:grid lg:grid-cols-1 lg:gap-5 mt-5 sm:my-2 lg:mt-5 px-1">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn("p-2 flex flex-col sm:flex sm:flex-row",
                buttonVariants({
                  variant: link.href === pathname ? "default" : "ghost",
                  size: "xl",
                }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <link.icon className="sm:mr-2 sm:size-4" />
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
          ))}
        </nav>
      </div>
    </section>
  );
}
