import { companyOperationPool } from "../config/companyOperationsDb.js";

const pool = await companyOperationPool()

export const getAllAccounts = async () => {
    const accounts = await pool.request().query('SELECT Code, Name FROM Master1 WHERE MasterType = 2');
    return accounts
}

export const getAccountByCode = async (code) => {
    const account = await pool.request()
        .input('Code', code)
        .query('SELECT Code, Name FROM Master1 WHERE MasterType = 2 AND Code = @Code');
    return account
}