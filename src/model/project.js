const { name } = require("ejs");
const { mongo } = require("mongoose");
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: String,
    email: String,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});

const projectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        startDate: String,
        endDate: String,
        description: String,

        customerInfor: customerSchema,
        members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        leader: userSchema,
        task: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    },
    {
        timestamps: true,
    }
);
projectSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
