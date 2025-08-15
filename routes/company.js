import express from "express";
import { getCompanyData, updateCompanyData } from "../controllers/company.js";

const router = express.Router();

router.get('/', getCompanyData);
router.patch('/', updateCompanyData)


export default router;