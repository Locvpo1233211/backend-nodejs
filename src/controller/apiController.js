const User = require("../model/user");
const path = require("path");
const {
    uploadSingleFileAPI,
    uploadMultiFileAPI,
} = require("../service/fileService");
const getUsersAPI = async (req, res) => {
    let results = await User.find({});

    return res.status(200).json({
        erroeCode: 0,
        data: results,
    });
};

const postCreateUserAPI = async (req, res) => {
    console.log(">>>>req", req.body);
    let { email, name, city } = req.body;
    let user = await User.create({ email, name, city });

    return res.status(201).json({
        errorCode: 0,
        data: user,
    });
};
const putUpdateUserAPI = async (req, res) => {
    let { email, name, city, id } = req.body;
    let user = await User.updateOne({ _id: id }, { email, name, city });

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};
const deleteUserAPI = async (req, res) => {
    let { id } = req.body;
    let user = await User.deleteOne({ _id: id });

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const postUploadSingleFileAPI = async (req, res) => {
    let sampleFile = req.files.image;
    // sampleFile processing logic here
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send("No files were uploaded.");
        return;
    }

    let result = await uploadSingleFileAPI(sampleFile);
    if (result.status === "failed") {
        return res.status(500).json({
            errorCode: 1,
            message: "Upload file failed",
            data: result.error,
        });
    }
    return res.status(200).json({
        errorCode: 0,
        message: "Upload file successfully",
        data: result,
    });
};
const postUploadmultiFileAPI = async (req, res) => {
    let sampleFile = req.files.image;
    console.log(">>>>sampleFile", sampleFile);
    // sampleFile processing logic here
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send("No files were uploaded.");
        return;
    }

    if (Array.isArray(sampleFile)) {
        let result = await uploadMultiFileAPI(sampleFile);
        console.log(">>>>result", result);
        if (result.status === "failed") {
            return res.status(500).json({
                errorCode: 1,
                message: "Upload file failed",
            });
        }
        return res.status(200).json({
            errorCode: 0,
            message: "Upload file successfully",
            data: result,
        });
    } else {
        postUploadSingleFileAPI(req, res);
    }
};
module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadmultiFileAPI,
};
