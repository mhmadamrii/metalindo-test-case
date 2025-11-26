import { NextResponse } from 'next/server';
import products from '@/constants/products.json';

export async function GET() {
  return NextResponse.json({
    success: true,
    name: 'products',
    data: products,
  });
}
