import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Handle fetching products
  return NextResponse.json({ message: 'Products list endpoint' });
}

export async function POST(request: Request) {
  // Handle creating a new product
  return NextResponse.json({ message: 'Create product endpoint' });
}
