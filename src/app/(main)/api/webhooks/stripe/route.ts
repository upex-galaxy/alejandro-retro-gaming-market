import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Handle Stripe webhooks
  return NextResponse.json({ message: 'Stripe webhook endpoint' });
}
