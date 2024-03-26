import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="sm:grid sm:place-content-center sm:h-screen sm:items-center sm:grid-flow-col sm:gap-5">
      <Image
        src="/login.jpg"
        alt=""
        width={1000}
        height={1000}
        className="sm:w-full sm:shadow-2xl sm:shadow-gray-900/50"
      />
      <div className="p-5 grid gap-5 sm:grid sm:gap-5">
        <div>
          <h1 className="text-3xl font-bold text-center border-b-8 border-yellow-300 text-gray-900 sm:text-5xl">
            ¡Registrate!
          </h1>
          <p className="mt-4 sm:mb-4">Crear una cuenta nueva</p>
        </div>

        <div>
          <label
            for="input-group-1"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Nombres
          </label>
          <div class="relative mb-5">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5">
              <Image src="user.svg" alt="" width={18} height={18} />
            </div>
            <input
              type="text"
              id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
              placeholder="Alvaro Steven"
            />
          </div>
          <label
            for="website-admin"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Apellidos
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5">
              <Image src="user.svg" alt="" width={18} height={18} />
            </div>
            <input
              type="password"
              id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
              placeholder="Rebaza Fuertes"
            />
          </div>
        </div>

        <div>
          <label
            for="input-group-1"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <div class="relative mb-5">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5">
              <Image
                src="email.svg"
                alt=""
                width={18}
                height={18}
                className="rounded"
              />
            </div>
            <input
              type="text"
              id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
              placeholder="name@gmail.com"
            />
          </div>
          <label
            for="website-admin"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5">
              <Image src="password.svg" alt="" width={18} height={18} />
            </div>
            <input
              type="password"
              id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
              placeholder="password"
            />
          </div>
        </div>
        <div>
          <button class="rounded-md bg-yellow-300 px-5 py-2.5 text-gray-900 font-bold transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">
            Crear Cuenta
          </button>
        </div>
        <div>
          <span>
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="font-bold">
              Iniciar Sesión
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}
