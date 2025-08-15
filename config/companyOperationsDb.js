import sql from 'mssql';
import {
    dbCompanyOperationsDatabase,
    dbPassword,
    dbPort,
    dbServer,
    dbUser
} from './env.js';

const companyOperationDbConfig = {
    user: dbUser,
    password: dbPassword,
    server: dbServer,
    port: dbPort,
    database: dbCompanyOperationsDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

let operationsPool;

export async function companyOperationPool() {
    if (!operationsPool) {
        try {
            operationsPool = await new sql.ConnectionPool(companyOperationDbConfig).connect();
            console.log('Connected to MSSQL Company Operation database');
        } catch (err) {
            console.error('Company Operation Database connection failed', err);
            process.exit(1);
        }
    }
    return operationsPool;
}