import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#002D47] text-white flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-[#00C2CB] mb-6">
        🌊 Grupo Océano
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mb-8">
        Sumérgete, descubre y transforma tu interior ✨ <br />
        Coaching, talleres, conferencias. Encuentra propósito, confianza y crecimiento 🚀
      </p>
      <Link
        href="https://payco.link/3b5e6a31-f95c-4413-a262-7050dcba1cda"
        target="_blank"
        className="bg-[#00C2CB] text-[#002D47] font-semibold px-6 py-4 rounded-full hover:bg-white transition"
      >
        Inscribirme al Taller
      </Link>
    </main>
  );
}
