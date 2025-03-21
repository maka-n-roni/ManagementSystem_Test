import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.DB_PORT,
    dbconfig: {
        server: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        pool: {
            max: 5,
            min: 1,
            idleTimeoutMillis: 30000,
        },
        options: {
            encrypt: false,
            datebase: process.env.DB_DATEBASE,
            trustServerCertificate: true,
        },
        authentication: {
            type: 'default',
            options: {
                userName: process.env.DB_USER,
                password: process.env.DB_PASS,
            },
        },
    },
};