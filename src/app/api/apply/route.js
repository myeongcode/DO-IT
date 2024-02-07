import { NextResponse } from 'next/server';

export async function GET(req, res) {
  return NextResponse.json([
    {
      id: 1,
      name: 'WOO',
      field: 'WEB',
    },
  ]);
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json({
    data,
  });
}
