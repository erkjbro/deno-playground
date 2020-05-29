import { Router } from 'https://deno.land/x/oak/mod.ts';

import * as dinoController from '../controllers/dino-controller.ts';

const router = new Router();

router.get("/dinos", dinoController.getDinos);

router.get("/dinos/:name", dinoController.getDino);

router.post("/dinos", dinoController.addDino);

router.put("/dinos/:name", dinoController.updateDino);

router.delete("/dinos/:name", dinoController.removeDino);

export default router;
