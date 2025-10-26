import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  return NextResponse.json({ id, resume: {} });
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();
  return NextResponse.json({ id, resume: body }, { status: 201 });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();
  return NextResponse.json({ id, resume: body });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  return NextResponse.json({ deleted: `resume for ${id}` });
}