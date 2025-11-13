import Link from 'next/link';

export default function Home() {
  return (
    <section className="w-full flex-1 flex flex-col items-center justify-center h-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Tu Tienda Única para Gaming Retro
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Compra y vende juegos clásicos, consolas y accesorios. ¡Únete a nuestra comunidad de entusiastas del gaming retro!
          </p>
          <div className="space-x-4">
            <Link
              href="/marketplace"
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            >
              Explorar Marketplace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
