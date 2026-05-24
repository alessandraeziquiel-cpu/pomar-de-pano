export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <span
              className="
              inline-block
              mb-6
              text-[#C46A4A]
              uppercase
              tracking-[3px]
              text-sm
              "
            >
              Do pomar pro seu abraço
            </span>

            <h1
              className="
              text-[90px]
              leading-[0.9]
              text-[#4F584B]
              mb-10
              "
            >
              Pomar
              <br />
              de Pano
            </h1>

            <p
              className="
              text-3xl
              text-[#6E6A66]
              leading-relaxed
              mb-10
              "
            >
              Bonecas artesanais criadas ponto a ponto
              para guardar afeto,
              memórias e histórias.
            </p>

            <div className="flex gap-5 flex-wrap">

              <a
                href="https://wa.me/5516982294288"
                target="_blank"
                rel="noopener noreferrer"
                className="
                bg-[#A8BFA3]
                text-white
                px-8
                py-4
                rounded-full
                text-xl
                shadow-lg
                "
              >
                ENCOMENDAR
              </a>

              <a
                href="#instagram"
                className="
                border
                border-[#A8BFA3]
                px-8
                py-4
                rounded-full
                text-xl
                text-[#4F584B]
                "
              >
                INSTAGRAM
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
              shadow-2xl
              "
            />

          </div>

        </div>

      </section>


      <section
        id="instagram"
        className="
        max-w-5xl
        mx-auto
        px-8
        pb-24
        "
      >

        <div
          className="
          bg-[#F5E9DA]
          rounded-[40px]
          p-12
          text-center
          "
        >

          <h2
            className="
            text-5xl
            text-[#4F584B]
            mb-6
            "
          >
            Instagram
          </h2>

          <p
            className="
            text-2xl
            text-[#6E6A66]
            mb-10
            "
          >
            Acompanhe o universo Pomar de Pano
          </p>

          <img
            src="https://images.unsplash.com/photo-1519682577862-22b62b24e493"
            alt="Instagram Pomar de Pano"
            className="
            rounded-[30px]
            w-full
            mb-8
            "
          />

          <a
            href="https://instagram.com/pomardepano.oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            bg-[#C97C7C]
            text-white
            px-10
            py-5
            rounded-full
            text-xl
            shadow-lg
            "
          >
            @pomardepano.oficial
          </a>

        </div>

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
        bg-[#25D366]
        shadow-2xl
        flex
        items-center
        justify-center
        text-white
        text-3xl
        z-50
        "
      >
        ✆
      </a>

    </main>
  );
}
