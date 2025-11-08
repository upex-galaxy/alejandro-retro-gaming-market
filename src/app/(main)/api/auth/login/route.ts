import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Handle user login
  return NextResponse.json({ message: 'Login endpoint' });
}
