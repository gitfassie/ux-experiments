// Edge middleware — Basic Auth gate for boxring.vercel.app
// Vercel auto-detects this file and runs it as an edge function.
// Password is read from the BOXRING_PASSWORD environment variable
// (configured on the Vercel project, never committed).

export const config = {
  matcher: '/((?!_vercel/|favicon\\.ico).*)',
};

export default function middleware(request) {
  const expected = process.env.BOXRING_PASSWORD;

  if (!expected) {
    // Misconfiguration — fail closed so the site doesn't leak when env var
    // is missing on a fresh project setup.
    return new Response('Configuration error: BOXRING_PASSWORD not set.', {
      status: 503,
    });
  }

  const header = request.headers.get('authorization') || '';
  if (header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6));
      const password = decoded.split(':').slice(1).join(':');
      if (password === expected) return; // pass through
    } catch {
      // fall through to 401
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="boxring", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
