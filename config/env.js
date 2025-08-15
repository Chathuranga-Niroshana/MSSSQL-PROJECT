import dotenv from 'dotenv';

dotenv.config();


export const port = parseInt(process.env.PORT, 10) || 3000;
export const dbUser = process.env.DB_USER;
export const dbPassword = process.env.DB_PASSWORD;
export const dbServer = process.env.DB_SERVER;
export const dbPort = parseInt(process.env.DB_PORT, 10);
export const dbCompanyRegistryDatabase = process.env.DB_COMPANY_REGISTRY_DATABASE;
export const dbCompanyOperationsDatabase = process.env.DB_COMPANY_OPERATIONS_DATABASE