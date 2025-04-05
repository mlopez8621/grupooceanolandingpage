// src/app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-slate-900">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">Grupo Océano</h1>
        <p className="text-xl max-w-2xl mb-6">
          Sumérgete, descubre y transforma tu interior ✨ Coaching, talleres, conferencias.
          Encuentra propósito, confianza y crecimiento 🚀
        </p>
        <a href="#inscripcion" className="bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition">
          Inscribirme al Taller
        </a>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre" className="py-20 px-6 bg-slate-800 text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300">Sobre Nosotros</h2>
        <p className="max-w-3xl mx-auto text-lg">
          En Grupo Océano ayudamos a las personas a reconectarse con su esencia a través de experiencias transformadoras.
          Nuestros programas están diseñados para inspirarte y empoderarte.
        </p>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 bg-slate-900 text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-cyan-200">Talleres Vivenciales</h3>
            <p>Conecta contigo mismo a través de experiencias prácticas.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-cyan-200">Coaching 1 a 1</h3>
            <p>Acompañamiento personalizado para tu camino interior.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-cyan-200">Conferencias</h3>
            <p>Charlas inspiradoras para grupos, empresas y eventos.</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 px-6 bg-slate-800 text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300">Testimonios</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <blockquote className="text-lg italic">“Gracias a Grupo Océano volví a creer en mí y encontré propósito.”</blockquote>
          <blockquote className="text-lg italic">“Una experiencia transformadora. El mejor regalo que me he dado.”</blockquote>
        </div>
      </section>

      {/* Inscripción */}
      <section id="inscripcion" className="py-20 px-6 bg-slate-900 text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300">Inscríbete al Próximo Taller</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 rounded bg-slate-800 text-white"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded bg-slate-800 text-white"
          />
          <button type="submit" className="bg-cyan-400 px-6 py-3 rounded-full text-slate-900 font-semibold hover:bg-cyan-300 transition">
            Enviar Inscripción
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-slate-800 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Grupo Océano. Todos los derechos reservados.
      </footer>
    </main>
  );
}
