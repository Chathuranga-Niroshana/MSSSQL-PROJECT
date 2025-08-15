import sql from 'mssql';
import {
    dbCompanyRegistryDatabase,
    dbPassword,
    dbPort,
    dbServer,
    dbUser
} from './env.js';

const companyRegistryDbConfig = {
    user: dbUser,
    password: dbPassword,
    server: dbServer,
    port: parseInt(dbPort, 10),
    database: dbCompanyRegistryDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

let companyPool;

export async function companyRegistryPool() {
    if (!companyPool) {
        try {
            companyPool = await new sql.ConnectionPool(companyRegistryDbConfig).connect();
            console.log('Connected to MSSQL Company Registry Database');
        } catch (err) {
            console.error('Company Registry Database connection failed', err);
            process.exit(1);
        }
    }
    return companyPool;
}