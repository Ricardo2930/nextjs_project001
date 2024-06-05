import NavbarLayout from "@/components/NavbarLayout"

export default function Layout({ children }) {
  return (
      <main className="flex flex-col lg:flex lg:flex-row" >
            <NavbarLayout/>
            {children}
      </main>
  );
}