import Link from 'next/link';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-rose-700/90 text-white backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-2xl mr-2" role="img" aria-label="logo">🎮👍</span>
          <span className="text-lg font-semibold">Retro Gaming Market</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/marketplace" className="text-sm font-medium hover:underline underline-offset-4">
            Marketplace
          </Link>
          <Link href="/users" className="text-sm font-medium hover:underline underline-offset-4">
            Usuarios
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Iniciar Sesión
          </Link>
          <Link href="/register" className="text-sm font-medium hover:underline underline-offset-4">
            Registrarse
          </Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">&copy; 2025 Retro Gaming Market. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4">
            Términos de Servicio
          </Link>
          <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
