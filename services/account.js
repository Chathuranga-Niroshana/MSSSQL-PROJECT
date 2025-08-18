import { companyOperationPool } from "../config/companyOperationsDb.js";
import { MASTER_TYPES } from "../constants/masterTypes.js";
import { ACCOUNT_TABLES_COLUMNS } from "../constants/accountTablesAndColumns.js";

const pool = await companyOperationPool()

export const getAllAccounts = async () => {
    const accounts = await pool.request().query(`SELECT Code, Name FROM Master1 WHERE MasterType = ${MASTER_TYPES.ACCOUNTS}`);
    return accounts
}

export const getAccountMaster1Data = async (code) => {
    const query = `SELECT ${ACCOUNT_TABLES_COLUMNS[0].columns.join(', ')} FROM Master1 WHERE Code = @Code`;
    const result = await pool.request()
        .input("Code", code)
        .query(query);
    return result.recordset[0];
}

export const getAccountAddressInfoData = async (code) => {
    const query = `SELECT ${ACCOUNT_TABLES_COLUMNS[1].columns.join(', ')} FROM MasterAddressInfo WHERE MasterCode = @Code`;
    const result = await pool.request()
        .input("Code", code)
        .query(query);
    return result.recordset[0];
}
export const getAccountHelp1Data = async (code) => {
    const query = `SELECT ${ACCOUNT_TABLES_COLUMNS[2].columns.join(', ')} FROM Help1 WHERE Code = @Code`;
    const result = await pool.request()
        .input("Code", code)
        .query(query);
    return result.recordset[0];
}

export const getAccountFootPrintData = async (code) => {
    const query = `SELECT ${ACCOUNT_TABLES_COLUMNS[3].columns.join(', ')} FROM MastFootPrint WHERE MasterCode = @Code`;
    const result = await pool.request()
        .input("Code", code)
        .query(query);
    return result.recordset[0];
}
export const getAccountHelp1AddNInfoData = async (code) => {
    const query = `SELECT ${ACCOUNT_TABLES_COLUMNS[4].columns.join(', ')} FROM Help1AddnInfo WHERE Code = @Code`;
    const result = await pool.request()
        .input("Code", code)
        .query(query);
    return result.recordset[0];
}
export const getAccountFolio1Data = async (code) => {
    const query = `SELECT ${ACCOUNT_TABLES_COLUMNS[5].columns.join(', ')} FROM Folio1 WHERE MasterCode = @Code`;
    const result = await pool.request()
        .input("Code", code)
        .query(query);
    return result.recordset[0];
}
export const getAccountImagesData = async (code) => {
    const query = `SELECT ${ACCOUNT_TABLES_COLUMNS[6].columns.join(', ')} FROM Images WHERE Code = @Code`;
    const result = await pool.request()
        .input("Code", code)
        .query(query);
    return result.recordset[0];
}






export const getAccountByCode = async (code) => {
    const query = `
        SELECT 
            ${ACCOUNT_TABLES_COLUMNS[0].columns.map(c => `m1.${c}`).join(', ')},
            ${ACCOUNT_TABLES_COLUMNS[1].columns.map(c => `mai.${c}`).join(', ')},
            ${ACCOUNT_TABLES_COLUMNS[2].columns.map(c => `h1.${c}`).join(', ')},
            ${ACCOUNT_TABLES_COLUMNS[3].columns.map(c => `mf.${c}`).join(', ')},
            ${ACCOUNT_TABLES_COLUMNS[4].columns.map(c => `h1ai.${c}`).join(', ')},
            ${ACCOUNT_TABLES_COLUMNS[5].columns.map(c => `f1.${c}`).join(', ')},
            ${ACCOUNT_TABLES_COLUMNS[6].columns.map(c => `img.${c}`).join(', ')}
        FROM Master1 m1
        LEFT JOIN MasterAddressInfo mai ON m1.Code = mai.MasterCode
        LEFT JOIN Help1 h1 ON m1.Code = h1.Code
        LEFT JOIN MastFootPrint mf ON m1.Code = mf.MasterCode
        LEFT JOIN Help1AddnInfo h1ai ON m1.Code = h1ai.Code
        LEFT JOIN Folio1 f1 ON m1.Code = f1.MasterCode
        LEFT JOIN Images img ON m1.Code = img.Code
        WHERE m1.Code = @Code
    `;
    const result = await pool.request()
        .input("Code", code)
        .query(query);

    return result.recordset[0];
};
