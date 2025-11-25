import type { NextRequest } from 'next/server';

function handler(req: NextRequest) {
  console.log('req', req);
  return 'Hello world';
}

export { handler as GET, handler as POST };
