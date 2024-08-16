import express from "express";
import { param } from "express-validator";
import ResortController from "../controllers/ResortController";

const router = express.Router();

router.get(
  "/:resortId", 
  param("resortId")
  .isString()
  .trim()
  .notEmpty()
  .withMessage("resortId string olmalı"),
  ResortController.getResort
);

router.get(
  "/search/:city",
  param("city")
  .isString()
  .trim()
  .notEmpty()
  .withMessage("şehir string olmalı"),
  ResortController.searchResort
);

export default router;
