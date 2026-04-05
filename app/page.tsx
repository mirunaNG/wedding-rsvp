import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ¡Bienvenidos a la Boda de Ioana y Fran!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Estamos emocionados de celebrar este día especial con ustedes.
        </p>
        <Link
          href="/rsvp"
          className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
        >
          Confirmar Asistencia (RSVP)
        </Link>
      </div>
    </div>
  );
}
