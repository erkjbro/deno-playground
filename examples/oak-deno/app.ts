import { Application } from 'https://deno.land/x/oak/mod.ts';

import router from './routes/dino-routes.ts';

const env = Deno.env.toObject();
const PORT = env.PORT || 8080;
const HOST = env.HOST || "127.0.0.1";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Deno server listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);
