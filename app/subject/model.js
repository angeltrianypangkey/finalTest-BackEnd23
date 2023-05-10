const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    kode: {type: String, required: [true, "Kode Matakuliah harus diisi"]},
    nama: {type: String},
    ruangan: {type: String},
    jam: {type: String},
    dosen: {type: String},
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;