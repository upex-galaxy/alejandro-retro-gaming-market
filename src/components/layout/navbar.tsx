import { cookies } from "next/headers";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export async function Navbar() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6 z-50" style={{ background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--destructive)))' }}>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6 text-white" />
          <span className="sr-only">Retro Hub</span>
        </Link>
        <Link
          href="/marketplace"
          className="text-white transition-colors hover:text-primary"
        >
          Marketplace
        </Link>
        <Link
          href="/users"
          className="text-white transition-colors hover:text-primary"
        >
          Usuarios
        </Link>
        <Link
          href="/beginner-guide"
          className="text-white transition-colors hover:text-primary"
        >
          Guía para Novatos
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5 text-white" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6 text-white" />
              <span className="text-xl text-white">Retro Hub</span>
            </Link>
            <Link href="/marketplace" className="text-white hover:text-primary">
              Marketplace
            </Link>
            <Link
              href="/users"
              className="text-gray-200 hover:text-primary"
            >
              Usuarios
            </Link>
            <Link
              href="/beginner-guide"
              className="text-gray-200 hover:text-primary"
            >
              Guía para Novatos
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-200" />
            <Input
              type="search"
              placeholder="Buscar productos..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-gray-700 text-white border-gray-600"
            />
          </div>
        </form>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full bg-gray-700 text-white">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Vender</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="text-white">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button>Registrarse</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}