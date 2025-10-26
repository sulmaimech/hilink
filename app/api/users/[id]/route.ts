import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { User } from '@/models';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const { id } = params;
  const user = await User.findById(id);
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const { id } = params;
  const body = await request.json();
  const user = await User.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(user);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const { id } = params;
  await User.findByIdAndDelete(id);
  return NextResponse.json({ deleted: id });
}