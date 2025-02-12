const { error } = require("console");
const { stat } = require("fs");
const path = require("path");

const uploadSingleFileAPI = async (file) => {
    let extName = path.extname(file.name);
    let basename = path.basename(file.name, extName);

    let fianlName = basename + "-" + Date.now() + extName;
    let uploadPath = path.join(__dirname, "..", "public", "images", fianlName);

    try {
        await file.mv(uploadPath);
        return {
            status: "success",
            path: fianlName,
            error: null,
        };
    } catch (error) {
        return {
            status: "failed",
            path: "null",

            error: error,
        };
    }
};

const uploadMultiFileAPI = async (file) => {
    try {
        console.log(">>>>file", file);
        let arr = [];
        let count = 0;
        for (let i = 0; i < file.length; i++) {
            let extName = path.extname(file[i].name);
            let basename = path.basename(file[i].name, extName);

            let fianlName = basename + "-" + Date.now() + extName;
            let uploadPath = path.join(
                __dirname,
                "..",
                "public",
                "images",
                fianlName
            );
            try {
                await file[i].mv(uploadPath);
                count++;
                arr.push({
                    status: "success",
                    path: fianlName,
                    __filename: file[i].name,
                    error: null,
                });
            } catch (error) {
                arr.push({
                    status: "failed",
                    path: fianlName,
                    __filename: file[i].name,
                    error: error,
                });
            }
        }
        return {
            status: count === file.length ? "success" : "failed",
            data: arr,
        };
    } catch (error) {
        return {
            status: "failed",
            data: [],
            error: error,
        };
    }
};

module.exports = { uploadSingleFileAPI, uploadMultiFileAPI };
