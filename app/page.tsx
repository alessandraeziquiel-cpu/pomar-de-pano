export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F2EC] relative overflow-hidden">

      {/* FLORES DECORATIVAS */}

      <img
        src="/flor-1.png"
        alt=""
        className="
        absolute
        top-10
        left-10
        w-20
        opacity-30
        pointer-events-none
        "
      />

      <img
        src="/flor-2.png"
        alt=""
        className="
        absolute
        top-24
        right-16
        w-16
        opacity-25
        pointer-events-none
        "
      />

      <img
        src="/flor-3.png"
        alt=""
        className="
        absolute
        bottom-20
        left-24
        w-14
        opacity-20
        pointer-events-none
        "
      />

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}

          <div>

            <span
              className="
              inline-block
              mb-6
              text-[#A7B09A]
              bg-white
              px-5
              py-2
              rounded-full
              shadow-sm
              tracking-widest
              text-sm
              "
            >
              BONECAS ARTESANAIS
            </span>

            <h1
              className="
              text-6xl
              md:text-8xl
              leading-none
              text-[#6A5648]
              font-serif
              mb-8
              "
            >
              Pomar
              <br />
              de Pano
            </h1>

            <p
              className="
              text-[#6A5648]
              text-xl
              leading-10
              max-w-xl
              mb-10
              "
            >
              Bonecas artesanais criadas ponto a ponto
              para guardar afeto, memórias e histórias.
            </p>

            <div className="flex flex-wrap gap-5">

              <button
                className="
                bg-[#A7B09A]
                text-white
                px-8
                py-4
                rounded-full
                shadow-md
                hover:scale-105
                transition
                "
              >
                ENCOMENDAR
              </button>

              <button
                className="
                border
                border-[#D7B5AF]
                text-[#6A5648]
                px-8
                py-4
                rounded-full
                hover:bg-white
                transition
                "
              >
                COLEÇÃO
              </button>

              <button
                className="
                bg-[#D7B5AF]
                text-white
                px-8
                py-4
                rounded-full
                shadow-sm
                hover:scale-105
                transition
                "
              >
                INSTAGRAM
              </button>

            </div>

          </div>

          {/* FOTO */}

          <div className="relative">

            <div
              className="
              absolute
              -top-6
              -left-6
              w-full
              h-full
              rounded-[40px]
              border
              border-[#D7B5AF]
              opacity-40
              "
            />

            <img
              src="/boneca.jpg"
              alt="Boneca Pomar de Pano"
              className="
              rounded-[40px]
              shadow-xl
              object-cover
              w-full
              relative
              z-10
              "
            />

          </div>

        </div>

      </section>

    </main>
  );
}
