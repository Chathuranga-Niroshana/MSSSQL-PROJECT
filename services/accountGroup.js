import { companyOperationPool } from "../config/companyOperationsDb.js";
import { MASTER_TYPES } from "../constants/masterTypes.js";
import { ACCOUNT_GROUP_TABLES_COLUMNS } from "../constants/accountGroupTablesAndColumns.js";

const pool = await companyOperationPool()

export const getAllAccGroups = async () => {
    const accGroups = await pool.request().query(`SELECT Code, Name FROM Master1 WHERE MasterType = ${MASTER_TYPES.ACCOUNT_GROUPS}`)
    return accGroups;
}

export const getAccGrpByCode = async (code) => {
    const query = `
    SELECT
        ${ACCOUNT_GROUP_TABLES_COLUMNS[0].columns.map(c => `m1.${c}`).join(', ')},
        ${ACCOUNT_GROUP_TABLES_COLUMNS[1].columns.map(c => `h1.${c}`).join(', ')},
        ${ACCOUNT_GROUP_TABLES_COLUMNS[2].columns.map(c => `mf.${c}`).join(', ')},
        ${ACCOUNT_GROUP_TABLES_COLUMNS[3].columns.map(c => `f1.${c}`).join(', ')}
    FROM Master1 m1
    LEFT JOIN Help1 h1 ON m1.Code = h1.Code
    LEFT JOIN MastFootPrint mf ON m1.Code = mf.MasterCode
    LEFT JOIN Folio1 f1 ON m1.Code = f1.MasterCode
    WHERE m1.Code = @Code
    `;

    const result = await pool.request().input("Code", code).query(query)
    return result;
}