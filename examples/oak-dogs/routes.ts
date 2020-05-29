import { Router } from "https://deno.land/x/oak/mod.ts";

import * as dogController from "./controller.ts";

const router = new Router();

router
  .get("/dogs", dogController.getDogs);
// .get('/dogs/:name', getDog)
// .post('/dogs', addDog)
// .put('/dogs/:name', updateDog)
// .delete('/dogs/:name', removeDog)

export default router;
