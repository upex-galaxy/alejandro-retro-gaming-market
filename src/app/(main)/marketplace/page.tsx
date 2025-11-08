import Link from 'next/link';

function ProductCard({ id, name, price, image }: { id: string; name: string; price: number; image: string }) {
  return (
    <div className="relative group">
      <Link href={`/marketplace/${id}`} className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View</span>
      </Link>
      <img
        src={image}
        alt={name}
        width={300}
        height={300}
        className="object-cover w-full h-60 rounded-lg"
      />
      <div className="flex-1 py-4">
        <h3 className="font-semibold tracking-tight">{name}</h3>
        <h4 className="font-semibold">${price}</h4>
      </div>
    </div>
  );
}

export default function MarketplacePage() {
  const products = [
    { id: '1', name: 'Super Nintendo Entertainment System', price: 150, image: 'https://placehold.co/300x300/4c2882/white?text=SNES' },
    { id: '2', name: 'Sega Genesis', price: 120, image: 'https://placehold.co/300x300/4c2882/white?text=Sega+Genesis' },
    { id: '3', name: 'Nintendo 64', price: 100, image: 'https://placehold.co/300x300/4c2882/white?text=N64' },
    { id: '4', name: 'PlayStation 1', price: 80, image: 'https://placehold.co/300x300/4c2882/white?text=PS1' },
    { id: '5', name: 'Game Boy Color', price: 60, image: 'https://placehold.co/300x300/4c2882/white?text=GBC' },
    { id: '6', name: 'Dreamcast', price: 180, image: 'https://placehold.co/300x300/4c2882/white?text=Dreamcast' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Marketplace</h1>
        <Link
          href="/sell"
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
        >
          Vender un Artículo
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}