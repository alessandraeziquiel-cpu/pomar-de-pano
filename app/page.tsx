export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5E9DA]">

      <section className="
      max-w-6xl
      mx-auto
      px-8
      py-24
      text-center
      ">

        <p className="
        text-[#C46A4A]
        uppercase
        tracking-[5px]
        mb-6
        text-sm
        ">
          Do pomar pro seu abraço
        </p>

        <h1 className="
        text-[80px]
        leading-none
        text-[#6B4D42]
        mb-8
        ">
          Pomar
          <br />
          de Pano
        </h1>

        <p className="
        max-w-2xl
        mx-auto
        text-[24px]
        text-[#7B655E]
        leading-relaxed
        mb-12
        ">
          Bonecas artesanais criadas ponto a ponto
          para guardar afeto, memórias e histórias.
        </p>

        <div className="
        flex
        gap-5
        justify-center
        flex-wrap
        ">

          <a
            href="https://wa.me/5516982294288"
            target="_blank"
            className="
            bg-[#D64545]
            text-white
            px-10
            py-4
            rounded-full
            text-lg
            shadow-xl
            "
          >
            ENCOMENDAR
          </a>

          <a
            href="#colecao"
            className="
            bg-[#A8BFA3]
            text-white
            px-10
            py-4
            rounded-full
            text-lg
            "
          >
            COLEÇÃO
          </a>

        </div>

      </section>

      <section
        id="colecao"
        className="
        max-w-6xl
        mx-auto
        px-8
        pb-24
        "
      >

        <div className="
        grid
        md:grid-cols-2
        gap-8
        ">

          <div className="
          bg-[#FFF8F2]
          rounded-[35px]
          p-10
          ">
            <h3 className="
            text-3xl
            text-[#C46A4A]
            mb-4
            ">
              Boneca Abraço
            </h3>

            <p className="text-[#6E615C]">
              Criada para acolher memórias,
              afeto e histórias especiais.
            </p>
          </div>

          <div className="
          bg-[#FFF8F2]
          rounded-[35px]
          p-10
          ">
            <h3 className="
            text-3xl
            text-[#C97C7C]
            mb-4
            ">
              Boneca Companhia
            </h3>

            <p className="text-[#6E615C]">
              Pequenas companheiras feitas
              para caminhar junto.
            </p>
          </div>

        </div>

      </section>

      <section className="
      text-center
      pb-24
      ">

        <p className="
        text-[#C46A4A]
        mb-4
        ">
          acompanhe o atelier
        </p>

        <a
          href="https://instagram.com/pomardepano"
          target="_blank"
          className="
          text-2xl
          text-[#6B4D42]
          "
        >
          @pomardepano
        </a>

      </section>

      <a
        href="https://wa.me/5516982294288"
        target="_blank"
        className="
        fixed
        bottom-6
        right-6
        w-20
        h-20
        rounded-full
        bg-[#D64545]
        shadow-2xl
        flex
        items-center
        justify-center
        z-50
        "
      >

        <span className="
        text-white
        text-3xl
        ">
          💬
        </span>

      </a>

    </main>
  );
}
