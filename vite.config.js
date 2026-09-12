import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';

function buildId() {
  try {
    const hash = execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    const date = new Date().toISOString().slice(0, 10);
    if (/^[0-9a-f]{4,}$/.test(hash)) return hash + ' ' + date;
  } catch (e) { /* non-git checkout: fall through */ }
  return 'dev';
}

export default defineConfig({
  base: './',
  define: { __BUILD_ID__: JSON.stringify(buildId()) },
  server: { port: 5173, strictPort: false },
  build: { target: 'es2020', chunkSizeWarningLimit: 1200 }
});
