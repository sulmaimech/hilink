import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ hilinks: [] });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ id: Date.now(), ...body }, { status: 201 });
}