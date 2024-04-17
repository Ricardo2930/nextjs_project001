import NavbarLayout from "@/components/NavbarLayout"

export default function Layout({ children }) {
  return (
      <main className="grid sm:flex" >
            <NavbarLayout/>
            {children}
      </main>
  );
}