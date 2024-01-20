const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: false,
    },
};

sql.connect(config, (err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

app.get('/api/data', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM dbo.NewTable');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

