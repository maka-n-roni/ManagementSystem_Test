const express = require('express');
const router = express();
const db = require('../config/server.js')
 
router.get('/test', (req,res) => {
    db.query("select * from itams_master_asset_machine where machine in ('M','D','N') order by mgmt_num desc", (err, data) => {
        if(!err) res.send({ products : data});
        else res.send(err);
    })
})
 
module.exports = router;