export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F2EC] text-[#6A5648] overflow-hidden">

      {/* ELEMENTOS DECORATIVOS */}
      <div className="absolute top-12 left-10 opacity-20 text-5xl">
        🌸
      </div>

      <div className="absolute top-24 right-16 opacity-20 text-4xl">
        🪡
      </div>

      <div className="absolute bottom-20 left-24 opacity-20 text-3xl">
        🤎
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 py-24 relative">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div className="space-y-8">

            <span className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-[#ECE3D8]
            text-sm
            tracking-[0.2em]
            uppercase
            ">
              Bonecas artesanais
            </span>

            <h1 className="
            text-6xl
            md:text-8xl
            leading-none
            font-light
            ">
              Pomar
              <br />
              de Pano
            </h1>

            <p className="
            text-xl
            leading-10
            max-w-xl
            text-[#7A6658]
            ">
              Bonecas artesanais criadas ponto a ponto
              para guardar afeto, memórias e histórias.
            </p>

            <div className="flex flex-wrap gap-5">

              <button className="
              px-8
              py-4
              rounded-full
              bg-[#A7B09A]
              text-white
              hover:scale-105
              duration-300
              shadow-md
              ">
                ENCOMENDAR
              </button>

              <button className="
              px-8
              py-4
              rounded-full
              border
              border-[#D7B5AF]
              bg-white
              hover:bg-[#F3ECE5]
              duration-300
              ">
                COLEÇÃO
              </button>

              <button className="
              px-8
              py-4
              rounded-full
              bg-[#D7B5AF]
              text-white
              hover:scale-105
              duration-300
              shadow-md
              ">
                INSTAGRAM
              </button>

            </div>

          </div>

          {/* IMAGEM */}
          <div className="relative">

            <div className="
            bg-[#EFE7DD]
            rounded-[40px]
            p-6
            shadow-xl
            border
            border-[#E6DCCF]
            ">

              <img
                src="/boneca.jpg"
                alt="Boneca artesanal Pomar de Pano"
                className="
                rounded-[30px]
                object-cover
                w-full
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* FRASE AFETIVA */}
      <section className="
      max-w-4xl
      mx-auto
      px-8
      pb-24
      text-center
      ">

        <div className="
        bg-[#EFE7DD]
        rounded-[40px]
        p-12
        shadow-sm
        ">

          <p className="
          text-2xl
          italic
          leading-10
          text-[#6A5648]
          ">
            Entre linhas, tecidos e delicadezas,
            cada boneca nasce para guardar memórias.
          </p>

        </div>

      </section>

    </main>
  );
}
