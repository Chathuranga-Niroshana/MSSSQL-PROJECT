import { getCompany, updateCompany } from "../services/company.js";

export const getCompanyData = async (req, res) => {
    try {
        const data = await getCompany();
        res.status(200).json(data.recordset);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving company data' });
        console.error('Error retrieving company data:', error);
    }
}

export const updateCompanyData = async (req, res) => {
    const { Name, ...fieldsToUpdate } = req.body;
    try {
        const result = await updateCompany({ Name, ...fieldsToUpdate });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error updating company data' });
        console.error('Error updating company data:', error);
    }
}