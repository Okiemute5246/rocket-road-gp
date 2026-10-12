// Cloudflare Worker that hands out Metered TURN relay passwords to the game, so the Metered key
// never appears in the game's code. Set the key as a secret named METERED_API_KEY in the Worker's
// settings (Settings > Variables and Secrets > Add > Secret).
const METERED_APP = 'rocketroadgp';
const ALLOWED_ORIGINS = [
  'https://okiemute5246.github.io',
  'http://localhost:8000',
  'http://127.0.0.1:8000',
];

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (!ALLOWED_ORIGINS.includes(origin)) return new Response('Forbidden', { status: 403 });
    const cors = { 'Access-Control-Allow-Origin': origin, 'Vary': 'Origin' };
    if (request.method === 'OPTIONS') return new Response(null, { headers: { ...cors, 'Access-Control-Allow-Methods': 'GET' } });
    if (request.method !== 'GET') return new Response('Method not allowed', { status: 405, headers: cors });

    const r = await fetch(`https://${METERED_APP}.metered.live/api/v1/turn/credentials?apiKey=${env.METERED_API_KEY}`);
    if (!r.ok) return new Response('Relay unavailable', { status: 502, headers: cors });
    return new Response(await r.text(), {
      headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  },
};
