import express from "express";
const router = express.Router();
import { addEvent } from "../controllers";

/* GET home page. */
router.get("/", function(
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  res.render("index", { title: "Express" });
});

router.post("/event", (req: express.Request, res: express.Response) => {
  const data = addEvent(req.body);
  try {
    res.status(200).json({ data });
  } catch {
    res.status(400).json({ error: "An error occured" });
  }
});

export default router;
