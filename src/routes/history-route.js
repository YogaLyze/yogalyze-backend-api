const router = require('express').Router();
const { history } = require('../controllers');

// POST URL/history -> add data history ke db
router.post('/history', history.addHistory);

// GET URL/history -> get all history data from db
router.get('/history', history.getAllHistory);

// GET URL/history/1 -> get history berdasarkan id di db
router.get('/history/:id', history.getHistoryById);

// PUT URL/history/1 -> update history berdasarkan id di db
router.put('/history/:id', history.updateHistorybyId);