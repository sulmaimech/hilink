import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { User } from '@/models';

export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  await connectDB();
  const body = await request.json();
  const user = await User.create(body);
  return NextResponse.json(user, { status: 201 });
}