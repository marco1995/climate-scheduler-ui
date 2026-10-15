import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';
import { rollup, watch } from 'rollup';
import configs from '../rollup.config.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const frontend = resolve(root, 'custom_components/climate_scheduler/frontend');
const dev = resolve(root, 'dev');
// Build before serving, then keep the TypeScript components up to date.
for (const config of configs) {
  const bundle = await rollup(config);
  await bundle.write(config.output);
  await bundle.close();
}
const watcher = watch(configs);
watcher.on('event', event => {
  if (event.code === 'ERROR') console.error(event.error);
  if (event.code === 'BUNDLE_END') { event.result.close(); console.log('Build aktualisiert – Browser neu laden.'); }
});
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.map': 'application/json' };
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === '/climate_scheduler/static/.version') {
      res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('demo'); return;
    }
    const isAsset = pathname.startsWith('/climate_scheduler/static/');
    const base = isAsset ? frontend : dev;
    const relative = isAsset ? pathname.slice('/climate_scheduler/static/'.length) : pathname === '/' ? 'index.html' : pathname.slice(1);
    const target = resolve(base, relative);
    if (!target.startsWith(base + sep)) { res.writeHead(403); res.end(); return; }
    const body = await readFile(target);
    res.writeHead(200, { 'Content-Type': `${mime[extname(target)] || 'application/octet-stream'}; charset=utf-8`, 'Cache-Control': 'no-store' });
    res.end(body);
  } catch { res.writeHead(404); res.end('Not found'); }
});
server.on('error', async error => { console.error(error.message); await watcher.close(); process.exitCode = 1; });
server.listen(Number(process.env.PORT || 5173), '127.0.0.1', () => console.log(`Demo: http://127.0.0.1:${server.address().port} (Strg+C beendet)`));
process.on('SIGINT', async () => { server.close(); await watcher.close(); });
