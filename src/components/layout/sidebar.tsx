"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Package,
  Package2,
  ShoppingCart,
  Users,
  BookOpen,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div
      className={cn(
        "relative hidden h-screen md:flex flex-col border-r bg-muted/40 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6 text-primary" />
            {!isCollapsed && <span>Retro Hub</span>}
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="/marketplace"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              {!isCollapsed && "Marketplace"}
            </Link>
            <Link
              href="/sell"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <ShoppingCart className="h-4 w-4" />
              {!isCollapsed && "Vender"}
            </Link>
            <Link
              href="/users"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              {!isCollapsed && "Usuarios"}
            </Link>
            <Link
              href="/beginner-guide"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <BookOpen className="h-4 w-4" />
              {!isCollapsed && "Guía para Novatos"}
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
           <Button size="icon" onClick={toggleSidebar} variant="outline" className="w-full">
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
