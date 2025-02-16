const Task = require("../model/task");
const aqp = require("api-query-params");
module.exports = {
    createTaskService: async (data) => {
        try {
            if (data.type === "EMPTY-TASK") {
                console.log(">>>>data", data);
                let result = await Task.create(data);
                return result;
            }
            if (data.type === "ADD-USER") {
                let task = await Task.findById(data.taskId);
                console.log(">>>>task", task);
                for (let i = 0; i < data.userId.length; i++) {
                    task.usersInfor.push(data.userId[i]);
                    await task.save();
                }
                return task;
            }
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
    getAllTasksService: async (queryString) => {
        let page = queryString.page;
        let { filter, limit, population } = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        let result = await Task.find(filter)
            .skip(offset)
            .limit(limit)
            .populate(population)
            .exec();
        return result;
    },
    deleteATaskService: async (data) => {
        try {
            let result = await Task.deleteById(data);
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
    updateATaskService: async (data) => {
        try {
            console.log(">>>>data", data);
            let result = await Task.updateOne({ _id: data.id }, { ...data });
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
};
