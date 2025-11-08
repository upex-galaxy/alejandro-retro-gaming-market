export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Product Detail: {params.productId}</h1>
      <p>Details for product {params.productId} go here.</p>
    </main>
  );
}
