export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFAF6]">

      <section className="max-w-6xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>

            <h1 className="text-[90px] leading-[0.9] text-[#4F584B] mb-10">
              Pomar
              <br />
              de Pano
            </h1>

            <p className="text-3xl text-[#666] leading-relaxed mb-10">
              Bonecas artesanais criadas ponto a ponto
              para guardar afeto, memórias e histórias.
            </p>

            <div className="flex gap-5 flex-wrap">

              <a
                href="https://wa.me/5516982294288"
                target="_blank"
                rel="noopener noreferrer"
                className="
                bg-[#9BA795]
                text-white
                px-8
                py-4
                rounded-full
                text-xl
                "
              >
                ENCOMENDAR
              </a>

              <a
                href="#colecao"
                className="
                border
                border-[#7E8577]
                px-8
                py-4
                rounded-full
                text-xl
                text-[#5A6154]
                "
              >
                COLEÇÃO
              </a>

            </div>

          </div>

          <div>

            <img
              src="/boneca-capa.jpg"
              alt="Boneca Pomar de Pano"
              className="
              rounded-[40px]
              w-full
              object-cover
              shadow-xl
              "
            />

          </div>

        </div>

      </section>

      <section
        id="colecao"
        className="
        max-w-6xl
        mx-auto
        px-8
        py-24
        "
      >

        <h2 className="text-6xl text-[#4F584B] mb-6">
          Coleção Pomar de Pano
        </h2>

        <p className="text-2xl text-[#777] mb-14">
          Bonecas criadas para guardar memórias,
          afeto e histórias especiais.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#F4EFE7] p-10 rounded-3xl">
            <h3 className="text-3xl mb-4">
              Bonecas afetivas
            </h3>

            <p>
              Feitas ponto a ponto para histórias especiais.
            </p>
          </div>

          <div className="bg-[#F4EFE7] p-10 rounded-3xl">
            <h3 className="text-3xl mb-4">
              Bonecas personalizadas
            </h3>

            <p>
              Criadas sob encomenda.
            </p>
          </div>

          <div className="bg-[#F4EFE7] p-10 rounded-3xl">
            <h3 className="text-3xl mb-4">
              Coleção floral
            </h3>

            <p>
              Tecidos delicados e acabamento artesanal.
            </p>
          </div>

          <div className="bg-[#F4EFE7] p-10 rounded-3xl">
            <h3 className="text-3xl mb-4">
              Bonecas memória
            </h3>

            <p>
              Afeto transformado em lembrança.
            </p>
          </div>

        </div>

      </section>

      <section className="text-center py-20">

        <h3 className="text-4xl text-[#4F584B] mb-5">
          Acompanhe o Pomar de Pano
        </h3>

        <a
          href="https://instagram.com/pomardepano"
          target="_blank"
          rel="noopener noreferrer"
          className="
          text-2xl
          text-[#7B856F]
          "
        >
          Instagram @pomardepano
        </a>

      </section>

      <a
        href="https://wa.me/5516982294288"
        target="_blank"
        rel="noopener noreferrer"
        className="
        fixed
        bottom-6
        right-6
        w-16
        h-16
        rounded-full
        bg-[#9FD39B]
        shadow-xl
        flex
        items-center
        justify-center
        z-50
        "
      >

        <span className="text-white text-3xl">
          ✆
        </span>

      </a>

    </main>
  );
}
