import {
  File,
  ListFilter,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const mockProducts = [
    {
        name: "Super Nintendo (SNES) - Classic Edition",
        price: "180.00",
        seller: "JavierR",
        condition: "Restaurado",
        imageUrl: "https://picsum.photos/600/400",
    },
    {
        name: "Sega Genesis - Model 2",
        price: "120.00",
        seller: "RetroGamesMX",
        condition: "Usado",
        imageUrl: "https://picsum.photos/600/400",
    },
    {
        name: "Nintendo 64 con Expansion Pak",
        price: "250.00",
        seller: "Coleccionista92",
        condition: "Como Nuevo",
        imageUrl: "https://picsum.photos/600/400",
    },
    {
        name: "PlayStation 1 (PSX) - SCPH-1001",
        price: "150.00",
        seller: "JavierR",
        condition: "Restaurado",
        imageUrl: "https://picsum.photos/600/400",
    },
    {
        name: "Game Boy Color - Atomic Purple",
        price: "90.00",
        seller: "PortatilesRetro",
        condition: "Usado",
        imageUrl: "https://picsum.photos/600/400",
    },
    {
        name: "Sega Dreamcast - Sports Edition",
        price: "220.00",
        seller: "RetroGamesMX",
        condition: "Edición Limitada",
        imageUrl: "https://picsum.photos/600/400",
    },
]


export default function MarketplacePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Marketplace</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <ListFilter className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Filtrar
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            Vender un Artículo
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="consoles">Consolas</TabsTrigger>
          <TabsTrigger value="games">Juegos</TabsTrigger>
          <TabsTrigger value="accessories">Accesorios</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 mt-4">
              {mockProducts.map((product, index) => (
                   <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="p-0">
                          <div className="relative aspect-video w-full">
                               <Image
                                  alt={product.name}
                                  className="object-cover"
                                  fill
                                  src={product.imageUrl}
                              />
                          </div>
                      </CardHeader>
                      <CardContent className="grid gap-2 p-4">
                          <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                          <CardDescription>Vendido por {product.seller}</CardDescription>
                          <div className="font-bold text-2xl text-primary">${product.price}</div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                          <Button className="w-full">Ver Artículo</Button>
                      </CardFooter>
                  </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
