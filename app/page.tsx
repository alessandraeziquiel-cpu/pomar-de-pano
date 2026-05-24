export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="
            text-[90px]
            leading-[0.9]
            text-[#4F584B]
            mb-10
            ">
              Pomar
              <br />
              de Pano
            </h1>

            <p className="
            text-3xl
            text-[#666]
            leading-relaxed
            mb-10
            ">
              Bonecas artesanais criadas ponto a ponto
              para guardar afeto, memórias e histórias.
            </p>

            <div className="flex gap-5">

              <a
                href="https://wa.me/5516982294288"
                target="_blank"
                className="
                bg-[#A0AA9A]
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
              shadow-xl
              w-full
              object-cover
              "
            />

          </div>

        </div>

      </section>

    </main>
  );
}
