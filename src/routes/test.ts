import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/alpha", (req, res) => {
  res.send("alpha");
});

router.get("/beta", (req, res) => {
  res.send("beta");
});

export default router;
