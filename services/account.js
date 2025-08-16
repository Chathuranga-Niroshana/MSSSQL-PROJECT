import { companyOperationPool } from "../config/companyOperationsDb.js";
import { MASTER_TYPES } from "../constants/masterTypes.js";

const pool = await companyOperationPool()

const accountTablesColumns = [
    { table: 'Master1', columns: ['Code', 'Name'] },
    { table: 'Master2', columns: ['Code', 'Name'] },
    { table: 'Master3', columns: ['Code', 'Name'] },
    { table: 'Master4', columns: ['Code', 'Name'] },
    { table: 'Master5', columns: ['Code', 'Name'] },
    { table: 'Master6', columns: ['Code', 'Name'] }
];

export const getAllAccounts = async () => {
    const accounts = await pool.request().query(`SELECT Code, Name FROM Master1 WHERE MasterType = ${MASTER_TYPES.ACCOUNTS}`);
    return accounts
}

export const getAccountByCode = async (code) => {
    const account = await pool.request()
        .input('Code', code)
        .query(`SELECT Code, Name FROM Master1 WHERE MasterType = ${MASTER_TYPES.ACCOUNTS} AND Code = @Code`);
    return account
}