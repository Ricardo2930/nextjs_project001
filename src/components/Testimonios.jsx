export default function Testimonios() {
  return (
    <section className="text-center px-4 py-12 sm:my-20 sm:text-center">
      <h2 className="text-5xl md:text-6xl 2xl:text-7xl font-bold text-gray-900">
        Nuestros Testimonios
      </h2>
      <h3 className="text-4xl md:text-5xl 2xl:text-6xl text-gray-600 border-b-8 border-yellow-300 inline-block">
        que dicen de nosotros
      </h3>
      <div className="grid text-center text-gray-500 md:grid-cols-3 p-4 gap-3 lg:gap-7 xl:gap-10 lg:mx-20">
        <div className="border-dotted border-4 border-yellow-300 rounded-xl p-5">
          <p className="text-pretty py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            repellendus provident, asperiores omnis, suscipit vel accusantium
            fuga autem maiores, corporis deserunt mollitia? Et iure excepturi
            aliquam dolor minima minus accusamus.
          </p>
          <div className="flex justify-center items-center gap-2">
          <img src="https://unavatar.io/segundorp" alt="" className="w-1/4 rounded-full"/>
          <h5 className="font-semibold">Alvaro Rebaza</h5>
          </div>
        </div>

        <div className="border-dotted border-4 border-yellow-300 rounded-xl p-5">
          <p className="text-pretty py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            repellendus provident, asperiores omnis, suscipit vel accusantium
            fuga autem maiores, corporis deserunt mollitia? Et iure excepturi
            aliquam dolor minima minus accusamus.
          </p>
          <div className="flex justify-center items-center gap-2">
          <img src="https://unavatar.io/stevenfuertes" alt="" className="w-1/4 rounded-full"/>
          <h5 className="font-semibold">Steven Fuertes</h5>
          </div>
        </div>

        <div className="border-dotted border-4 border-yellow-300 rounded-xl p-5">
          <p className="text-pretty py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            repellendus provident, asperiores omnis, suscipit vel accusantium
            fuga autem maiores, corporis deserunt mollitia? Et iure excepturi
            aliquam dolor minima minus accusamus.
          </p>
          <div className="flex justify-center items-center gap-2">
          <img src="https://unavatar.io/ricardo2930" alt="" className="w-1/4 rounded-full"/>
          <h5 className="font-semibold">Ricardo Huaytan</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
