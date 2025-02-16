const {
    createTaskService,
    getAllTasksService,
    deleteATaskService,
    updateATaskService,
} = require("../service/taskService");
module.exports = {
    postCreateTasksAPI: async (req, res) => {
        let { name, description, status, startDate, endDate, type } = req.body;

        let result = await createTaskService(req.body);

        if (!result) {
            return res.status(500).json({
                errorCode: 1,
                message: "Create task failed",
            });
        }
        return res.status(200).json({
            errorCode: 0,
            message: "Create task successfully",
            data: result,
        });
    },
    getAllTaskAPI: async (req, res) => {
        console.log(">>>>getAllTaskAPI", req.query);
        let result = await getAllTasksService(req.query);
        if (result) {
            return res.status(200).json({
                errorCode: 0,
                data: result,
            });
        } else {
            return res.status(500).json({
                errorCode: 1,
                message: "Get all task failed",
                data: result,
            });
        }
    },
    deleteTaskAPI: async (req, res) => {
        let { id } = req.body;
        let result = await deleteATaskService(id);
        if (result) {
            return res.status(200).json({
                errorCode: 0,
                data: result,
            });
        } else {
            return res.status(500).json({
                errorCode: 1,
                message: "Delete task failed",
                data: result,
            });
        }
    },
    updateTaskAPI: async (req, res) => {
        let result = await updateATaskService(req.body);
        if (result) {
            return res.status(200).json({
                errorCode: 0,
                data: result,
            });
        } else {
            return res.status(500).json({
                errorCode: 1,
                message: "Update task failed",
                data: result,
            });
        }
    },
};
