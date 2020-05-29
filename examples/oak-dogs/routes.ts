import { Router } from "https://deno.land/x/oak/mod.ts";

import * as dogController from "./controller.ts";

const router = new Router();

router.get("/dogs", dogController.getDogs);

router.get("/dogs/:name", dogController.getDog);

router.post("/dogs", dogController.addDog);

router.put("/dogs/:name", dogController.updateDog);

router.delete("/dogs/:name", dogController.removeDog);

export default router;
