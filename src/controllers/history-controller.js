const config = require('../config/db');
const mysql = require('mysql');

module.exports = {
    //tambah history
    addHistory(req,res){
        let data = {
            //placeholder
        }
    },
    getAllHistory(req,res){

    },
    getHistoryById(req,res){
        let id = req.params.id;
    },
    updateHistorybyId(req,res){
        let id = req.params.id;
    }
}