import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Handle user registration
  return NextResponse.json({ message: 'Register endpoint' });
}
