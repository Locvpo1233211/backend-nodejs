const {
    createProjectService,
    getAllProjectService,
} = require("../service/projectService");
const aqp = require("api-query-params");

module.exports = {
    postCreateProjectAPI: async (req, res) => {
        let result = await createProjectService(req.body);
        if (result) {
            return res.status(201).json({
                errorCode: 0,
                data: result,
            });
        } else {
            return res.status(500).json({
                errorCode: 1,
                message: "Create project failed",
                data: result,
            });
        }
    },
    getAllProjectAPI: async (req, res) => {
        console.log(">>>>getAllProjectAPI", req.query);
        let result = await getAllProjectService(req.query);
        if (result) {
            return res.status(200).json({
                errorCode: 0,
                data: result,
            });
        } else {
            return res.status(500).json({
                errorCode: 1,
                message: "Get all project failed",
                data: result,
            });
        }
    },
};
