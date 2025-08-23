import {
    getAccGrpByCode,
    getAllAccGroups
} from "../services/accountGroup.js";

export const getAllAccountGroupData = async (req, res) => {
    try {
        const data = await getAllAccGroups()
        res.status(200).json(data.recordset)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving account groups' });
        console.error('Error retrieving groups:', error);
    }
}


export const getAccountGroupDataByCode = async (req, res) => {
    try {
        const { code } = req.params
        const data = await getAccGrpByCode(code)
        if (!data) {
            res.status(404).json({ message: "Acc Grp Not Found" })
        }
        res.status(200).json(data.recordset)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving account group' });
        console.error('Error retrieving group:', error);
    }
}