import products from '@/constants/products.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    name: 'products',
    data: products,
  });
}
