export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative">
        <img
          src="/fachada.png"
          className="w-full h-[500px] object-cover opacity-60"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <img src="/logo.png" className="w-44 mb-6" />
          <h1 className="text-6xl font-black mb-4">VAN SERVICE</h1>
          <p className="text-xl text-zinc-300 max-w-2xl">
            Traslados Artísticos • Fretamento • Eventos
          </p>

          <a
            href="https://wa.me/message/DUP3QU3AAVOPL1"
            className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl text-xl font-bold"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center mb-16">
          Nossa Frota
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/fachada.png" className="rounded-3xl h-80 w-full object-cover" />
          <img src="/interior.jpeg" className="rounded-3xl h-80 w-full object-cover" />
          <img src="/banner.png" className="rounded-3xl h-80 w-full object-cover" />
        </div>
      </section>

      <section className="bg-red-600 py-20 text-center px-6">
        <h2 className="text-5xl font-black mb-6">
          Solicite seu orçamento
        </h2>

        <p className="text-xl mb-8">
          Atendimento rápido e profissional.
        </p>

        <a
          href="https://wa.me/message/DUP3QU3AAVOPL1"
          className="bg-black px-10 py-5 rounded-2xl text-2xl font-black"
        >
          WhatsApp: (17) 99752-4669
        </a>
      </section>
    </div>
  )
}
