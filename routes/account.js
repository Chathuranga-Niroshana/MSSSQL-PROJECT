import express from "express";
import {
    getAccountByCodeData,
    getAddressInfoData,
    getAllAccountsData,
    getFolio1Data,
    getFootPrintData,
    getHelp1AddNInfoData,
    getHelp1Data,
    getImagesData,
    getMaster1Data
} from "../controllers/account.js";

const router = express.Router();

router.get('/', getAllAccountsData);
router.get("/:code", getAccountByCodeData);
router.get("/master1/:code", getMaster1Data);
router.get("/address-info/:code", getAddressInfoData);
router.get("/help1/:code", getHelp1Data);
router.get("/footprint/:code", getFootPrintData);
router.get("/help1-addn-info/:code", getHelp1AddNInfoData);
router.get("/folio1/:code", getFolio1Data);
router.get("/images/:code", getImagesData);

export default router;