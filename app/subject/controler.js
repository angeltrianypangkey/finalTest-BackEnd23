const Subject = require("./model");

const index = async (req, res, next) => {
    try {
        const subject = await Subject.find();
        res.send({status: "success", message: "List Matakuliah", data: subject});
    } catch (error) {
        res.send({status: "error", message: error.message});
    }
};

const getSubjectByKode = async (req, res) => {
    try {
        const subject = await Subject.findOne({kode: req.params.kode});
        if(subject){
            res.send({status: "success",
            message: "get subject by kode",
            data: subject});
        } else {
            res.send({status: "error",
            message: "subject not found",
            data: null});
        }
    }
    catch (error) {
        res.send({status: "error",
        message: error.message});
    }
};

//endpoint to get subject by query fakultas
const getSubjectByNama = async (req, res) => {
    try {
        const subject = await Subject.find({nama: req.query.nama});
        if(subject){
            res.send
            ({status: "success",
            message: "get subject by nama",
            data: subject});
        }
        else {
            res.send
            ({status: "error",
            message: "subject not found",
            data: null
            });
            }
        }
    catch (error) {
        res.send({status: "error",
        message: error.message});
    }
};

//endpoint to post new database
const postSubject = async (req, res) => {
    try {
        const subject = new
        Subject({
            kode: req.body.kode,
            nama: req.body.nama,
            ruangan: req.body.ruangan,
            jam: req.body.jam,
            dosen: req.body.dosen,
            });
        const newSubject = await subject.save();
        res.send({status: "success",
        message: "new subject created",
        data: newSubject});
    }
    catch (error) {
        res.send({status: "error",
        message: error.message});
        }
};

//endpoint to delete database
const deleteSubject = async (req, res) => {
    try {
        const subject = await Subject.findOne({kode: req.params.kode});
        if(subject) {
            const deletedSubject = await Subject.findOneAndDelete(req.params.kode);
            res.send({status: "success",
            message: "subject deleted",
            data: deletedSubject});
            }
        else {
            res.send({status: "error", message: "subject not found", data: null});
            }
        }
    catch (error) {
        res.send({status: "error", message: error.message});
    }
};

//endpoint to update database
const updateSubject = async (req, res) => {
    try {
        const subject = await Subject.findOne({kode: req.params.kode});
        if (subject) {
            const updatedSubject = await Subject.findOneAndUpdate(req.params.kode, req.body, { new: true });
            res.send({ status: "success", message: "subject updated", data: updatedSubject });
        } else {
            res.send({ status: "error", message: "subject not found", data: null});
        }
    } catch (error) {
        res.send({ status: "error", message: error.message });
    }
};


module.exports = {
    index,
    getSubjectByKode,
    getSubjectByNama,
    postSubject,
    deleteSubject,
    updateSubject
};