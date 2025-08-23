import { companyOperationPool } from "../config/companyOperationsDb.js";
import { COST_CENTER_TABLES_COLUMNS } from "../constants/costCenterTablesAndColumns.js";
import { MASTER_TYPES } from "../constants/masterTypes.js";

const pool = await companyOperationPool()

export const getAllCostCenters = async () => {
    const costCenters = await pool.request().query(`SELECT Name, Code from Master1 WHERE MasterType = ${MASTER_TYPES.COST_CENTERS}`)
    return costCenters
}

export const getCostCenterByCode = async (code) => {
    const query = `
    SELECT 
        ${COST_CENTER_TABLES_COLUMNS[0].columns.map(c => `m1.${c}`).join(", ")},
        ${COST_CENTER_TABLES_COLUMNS[1].columns.map(c => `f1.${c}`).join(", ")},
        ${COST_CENTER_TABLES_COLUMNS[2].columns.map(c => `h1.${c}`).join(", ")}
    FROM Master1 m1
    LEFT JOIN Folio1 f1 ON m1.Code = f1.MasterCode
    LEFT JOIN Help1 h1 ON m1.Code = h1.Code
    WHERE m1.Code = @Code
    `;

    const result = await pool.request().input("Code", code).query(query)
    return result;
}