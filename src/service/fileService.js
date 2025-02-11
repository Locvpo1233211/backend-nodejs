const { error } = require("console");
const path = require("path");

const uploadSingleFileAPI = async (file) => {
    uploadPath = path.join(__dirname, "..", "public", "imagessss", file.name);
    try {
        await file.mv(uploadPath);
        return {
            status: "success",
            path: "link-image",
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

module.exports = { uploadSingleFileAPI };
