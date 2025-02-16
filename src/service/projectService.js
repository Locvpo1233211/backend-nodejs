const Project = require("../model/project");
const aqp = require("api-query-params");
module.exports = {
    createProjectService: async (data) => {
        try {
            console.log(">>>>data", data);
            result = null;
            if (data.type === "EMPTY PROJECT") {
                result = await Project.create(data);
            }
            if (data.type === "ADD MEMBER") {
                let project = await Project.findById(data.projectId);
                for (let i = 0; i < data.userId.length; i++) {
                    if (!project.members.includes(data.userId[i])) {
                        project.members.push(data.userId[i]);
                        await project.save();
                    }
                }
                result = project;
            }
            if (data.type === "REMOVE MEMBER") {
                let project = await Project.findById(data.projectId);
                for (let i = 0; i < data.userId.length; i++) {
                    if (project.members.includes(data.userId[i])) {
                        project.members.pull(data.userId[i]);
                        await project.save();
                    }
                }
                result = project;
            }

            if (data.type === "ADD TASK") {
                let project = await Project.findById(data.projectId);
                for (let i = 0; i < data.taskId.length; i++) {
                    if (!project.task.includes(data.taskId[i])) {
                        project.task.push(data.taskId[i]);
                        await project.save();
                    }
                }
                result = project;
            }

            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
    getAllProjectService: async (queryString) => {
        try {
            console.log(">>>>queryString", queryString);
            let page = queryString.page;
            const { filter, limit, population } = aqp(queryString);
            console.log(filter);
            delete filter.page;
            let offset = (page - 1) * limit;
            let result = await Project.find(filter)
                .skip(offset)
                .limit(limit)
                .populate(population)
                .exec();
            console.log(">>>>result", population);
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
    deleteAProjectService: async (data) => {
        try {
            console.log(">>>>data", data);
            let result = await Project.deleteById(data);
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
    updateProjectService: async (data) => {
        try {
            console.log(">>>>data", data);
            let result = await Project.updateOne(
                { _id: data.id },
                {
                    name: data.name,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    description: data.description,
                }
            );
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
};
