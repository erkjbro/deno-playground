import { Application } from "https://deno.land/x/oak/mod.ts";

import dogRoutes from "./routes.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 8080;
const HOST = env.HOST || "127.0.0.1";

const app = new Application();

app.use(dogRoutes.routes());
app.use(dogRoutes.allowedMethods());

console.log(`Deno server listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);
