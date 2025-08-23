import express from "express";
import {
    getAllCostCenterData,
    getCostCenterDataByCode,
} from "../controllers/costCenter.js";

const router = express.Router();

router.get('/', getAllCostCenterData);
router.get("/:code", getCostCenterDataByCode);

export default router