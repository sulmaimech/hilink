import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  return NextResponse.json({ userId: id, hilinks: [] });
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();
  return NextResponse.json({ userId: id, hilink: { id: Date.now(), ...body } }, { status: 201 });
}