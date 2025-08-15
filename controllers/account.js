import { getAllAccounts } from "../services/account.js";

export const getAllAccountsData = async (req, res) => {
    try {
        const data = await getAllAccounts()
        res.status(200).json(data.recordset)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving accounts' });
        console.error('Error retrieving accounts:', error);
    }
}