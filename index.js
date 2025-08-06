import express from 'express';
import sql from 'mssql';

const app = express();
const port = 3000;

app.use(express.json());
// Database configuration

const config = {
    user: 'sa',
    password: 'svtdev@123',
    server: '162.220.12.130',
    port: 1433,
    database: 'BusyComp0001_db',
    options: {
        encrypt: true, // Use encryption
        trustServerCertificate: true // Change to false in production
    }
}

sql.connect(config).then(pool => {
    if (pool.connected) {
        console.log('Connected to MSSQL database');
    }
    app.get('/api/data', async (req, res) => {
        try {
            const result = await pool.request().query('SELECT * FROM Accounts');
            res.json(result.recordset);
        } catch (err) {
            console.error('SQL error', err);
            res.status(500).send('Error retrieving data');
        }
    });
}).catch(err => {
    console.error('Database connection failed', err);
    process.exit(1);
});

app.patch('/api/data', async (req, res) => {
    const { Name, Address4 } = req.body;

    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('Name', sql.NVarChar, Name)
            .input('Address4', sql.NVarChar, Address4)
            .query('UPDATE Company SET Address4 = @Address4 WHERE Name = @Name');
        console.log(result);
        if (result.rowsAffected[0] > 0) {
            res.status(200).send('Data updated successfully');
        } else {
            res.status(404).send('Data not found');
        }
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send('Error inserting data');
    }

})

app.get('/', (req, res) => {
    res.send('Hello, MSSQL Project!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});