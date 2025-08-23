import {
    getAllCostCenters,
    getCostCenterByCode
} from "../services/costCenter.js";

export const getAllCostCenterData = async (req, res) => {
    try {
        const data = await getAllCostCenters()
        res.status(200).json(data.recordset)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving Cost Centers' });
        console.error('Error retrieving groups:', error);
    }
}


export const getCostCenterDataByCode = async (req, res) => {
    try {
        const { code } = req.params
        const data = await getCostCenterByCode(code)
        if (!data) {
            res.status(404).json({ message: "Cost Center Not Found" })
        }
        res.status(200).json(data.recordset)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving Cost Center' });
        console.error('Error retrieving:', error);
    }
}