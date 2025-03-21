import sql from 'mssql';
import { config } from './config.js';

const connPool = new sql.ConnectionPool(config.dbconfig)
  .connect()
  .then((pool) => {
    console.log('DB연결 성공');
    return pool;
  })
  .catch((err) => {
    console.log('err ', err);
  });

export {
  sql,
  connPool
}

// 해당 경로(/users) 진입시 특정 쿼리를 실행하여 DB 결과 반환
app.get('/users', (req, res) => {
  // MSSQL 쿼리 실행
  pool.request().query('SELECT * FROM testTable', (err, result) => {
    // 쿼리 실행 실패시
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error executing query');
      return;
    }
    // 쿼리 실행 성공시 결과 출력
    res.json(result.recordset);
  });
});
