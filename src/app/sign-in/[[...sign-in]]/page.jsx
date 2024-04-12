import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
  <div className="grid place-content-center items-center h-screen bg-gray-900">

      <SignIn />
  </div>  
);
}