import express from "express";
import {
    getAccountGroupDataByCode,
    getAllAccountGroupData
} from "../controllers/accountGroup.js";

const router = express.Router();

router.get('/', getAllAccountGroupData);
router.get("/:code", getAccountGroupDataByCode);

export default router