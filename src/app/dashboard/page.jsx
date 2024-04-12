import { UserButton } from "@clerk/nextjs";


export default function page() {
  return (
    <div className="h-screen">
      <h1>Dashboard</h1>
      <UserButton 
      afterSignOutUrl="/"
      />
      

    </div>
  )
}
