var express = require('express');
var router = express.Router();
const {getSubjectByKode, postSubject, deleteSubject, updateSubject, index, getSubjectByNama} = require("./controler");

/* GET home page. */
router.get('/matakuliah', index)
router.get('/matakuliah/:kode', getSubjectByKode);
router.get('/matkul', getSubjectByNama);
router.post('/matakuliah', postSubject);
router.delete('/matakuliah/:kode', deleteSubject);
router.put('/matakuliah/:kode', updateSubject);

module.exports = router;
