import {
    getAccountAddressInfoData,
    getAccountByCode,
    getAccountFolio1Data,
    getAccountFootPrintData,
    getAccountHelp1AddNInfoData,
    getAccountHelp1Data,
    getAccountImagesData,
    getAccountMaster1Data,
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
        if (!data) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving account', errorData: error });
        console.error('Error retrieving account:', error);
    }
}

export const getMaster1Data = async (req, res) => {
    const { code } = req.params;
    try {
        const data = await getAccountMaster1Data(code);
        if (!data) {
            return res.status(404).json({ error: 'Master1 data not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving Master1 data', errorData: error });
        console.error('Error retrieving Master1 data:', error);
    }
}

export const getAddressInfoData = async (req, res) => {
    const { code } = req.params;
    try {
        const data = await getAccountAddressInfoData(code);
        if (!data) {
            return res.status(404).json({ error: 'Address info not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving address info', errorData: error });
        console.error('Error retrieving address info:', error);
    }
}

export const getHelp1Data = async (req, res) => {
    const { code } = req.params;
    try {
        const data = await getAccountHelp1Data(code);
        if (!data) {
            return res.status(404).json({ error: 'Help1 data not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving Help1 data', errorData: error });
        console.error('Error retrieving Help1 data:', error);
    }
}

export const getFootPrintData = async (req, res) => {
    const { code } = req.params;
    try {
        const data = await getAccountFootPrintData(code);
        if (!data) {
            return res.status(404).json({ error: 'Footprint data not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving footprint data', errorData: error });
        console.error('Error retrieving footprint data:', error);
    }
}

export const getHelp1AddNInfoData = async (req, res) => {
    const { code } = req.params;
    try {
        const data = await getAccountHelp1AddNInfoData(code);
        if (!data) {
            return res.status(404).json({ error: 'Help1 additional info not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving Help1 additional info', errorData: error });
        console.error('Error retrieving Help1 additional info:', error);
    }
}

export const getFolio1Data = async (req, res) => {
    const { code } = req.params;
    try {
        const data = await getAccountFolio1Data(code);
        if (!data) {
            return res.status(404).json({ error: 'Folio1 data not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving Folio1 data', errorData: error });
        console.error('Error retrieving Folio1 data:', error);
    }
}

export const getImagesData = async (req, res) => {
    const { code } = req.params;
    try {
        const data = await getAccountImagesData(code);
        if (!data) {
            return res.status(404).json({ error: 'Images not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving images', errorData: error });
        console.error('Error retrieving images:', error);
    }
}

