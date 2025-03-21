const express = require('express');

const app = express();
app.listen(3000, function () {
    console.log('listening on 3000')
});

// mssql 연동 -> 실제 본인의 mssql 값 작성해주면 됩니다.
var sql = require("mssql");

const pool = new sql.ConnectionPool({
    server: "10.60.61.51",
    database: "infradb",
    user: "grafana",
    password: "grafana",
    port: 1433,
    options: {      // Setting the TLS ServerName to an IP address is not permitted by RFC 6066. 오류 해결
        encrypt: false,
        database: process.env.SQL_DATABASE , //update me
        instanceName: process.env.SQL_INSTANCE,
        trustServerCertificate: true,
    } 
})

// pool.connect((err) => {
//     if(err){
//         return console.error('error : ', err);
//     }
//     console.log('MSSQL 연결 완료')
// });

app.get('/test',(req,res) => {
    pool.request().query('select * from itams_master_asset_machine', (err, result) => {
        if(err){
            console.error('Error executing query:', err);
            res.status(500).send('Error executing query');
            return;
        }
        res.json(result.recordset);
    })
})