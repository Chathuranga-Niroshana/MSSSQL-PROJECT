import {
    getAccountByCode,
    getAllAccounts
} from "../services/account.js";

export const getAllAccountsData = async (req, res) => {
    try {
        const data = await getAllAccounts()
        res.status(200).json(data.recordset)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving accounts' });
        console.error('Error retrieving accounts:', error);
    }
}

export const getAccountByCodeData = async (req, res) => {
    const { code } = req.params;
    try {
        const data = await getAccountByCode(code)
        if (data.recordset.length === 0) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.status(200).json(data.recordset[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving account' });
        console.error('Error retrieving account:', error);
    }
}