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
};
