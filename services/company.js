import { companyRegistryPool } from "../config/companyRegistryDb.js";

const pool = await companyRegistryPool();

export const getCompany = async () => {
    const data = await pool.request().query('SELECT * FROM company')
    return data
}

export const updateCompany = async (companyData) => {
    const { Name, ...fieldsToUpdate } = companyData;
    if (!Name) {
        throw new Error("Company 'Name' is required for update");
    }
    if (Object.keys(fieldsToUpdate).length === 0) {
        throw new Error("No fields provided to update");
    }

    const request = pool.request();
    const setClauses = [];
    Object.entries(fieldsToUpdate).forEach(([key, value]) => {
        setClauses.push(`${key} = @${key}`);
        request.input(key, sql.NVarChar, value);
    });
    request.input('Name', sql.NVarChar, Name);
    const query = `
        UPDATE Company
        SET ${setClauses.join(', ')}
        WHERE Name = @Name
    `;
    const result = await request.query(query);
    return result;
};