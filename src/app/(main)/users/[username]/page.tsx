import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const mockUser = {
    username: "JavierR",
    joinDate: "Octubre 2025",
    avatarUrl: "https://placehold.co/100x100?text=JR",
    rating: 4.9,
    reviews: 124,
    isVerified: true,
}

const mockProducts = [
    {
        name: "Super Nintendo (SNES) - Classic Edition",
        price: "180.00",
        imageUrl: "https://placehold.co/600x400?text=SNES",
    },
    {
        name: "PlayStation 1 (PSX) - SCPH-1001",
        price: "150.00",
        imageUrl: "https://placehold.co/600x400?text=PlayStation",
    },
]

export default function UserProfilePage({ params }: { params: { username: string } }) {
    return (
        <div className="grid gap-8">
            <Card>
                <CardHeader className="flex flex-col md:flex-row items-start gap-6">
                    <Avatar className="w-24 h-24 border-4 border-primary">
                        <AvatarImage src={mockUser.avatarUrl} alt={mockUser.username} />
                        <AvatarFallback>{mockUser.username.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <CardTitle className="text-4xl">{params.username}</CardTitle>
                        <CardDescription>Miembro desde {mockUser.joinDate}</CardDescription>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-1">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                <span className="font-bold">{mockUser.rating}</span>
                                <span className="text-sm text-muted-foreground">({mockUser.reviews} valoraciones)</span>
                            </div>
                            {mockUser.isVerified && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    Vendedor Verificado
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="ml-auto">
                        <Button>Contactar</Button>
                    </div>
                </CardHeader>
            </Card>

            <div>
                <h2 className="text-2xl font-bold mb-4">Artículos en venta de {params.username}</h2>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
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
                                <div className="font-bold text-2xl text-primary">${product.price}</div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full">Ver Artículo</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
