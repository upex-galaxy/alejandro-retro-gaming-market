import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { productId: string } }) {
  // Handle fetching a single product
  return NextResponse.json({ message: `Product detail for ${params.productId}` });
}

export async function PUT(request: Request, { params }: { params: { productId: string } }) {
  // Handle updating a product
  return NextResponse.json({ message: `Update product ${params.productId}` });
}

export async function DELETE(request: Request, { params }: { params: { productId: string } }) {
  // Handle deleting a product
  return NextResponse.json({ message: `Delete product ${params.productId}` });
}
