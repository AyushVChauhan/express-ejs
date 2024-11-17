const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
	{
		username: { type: String },
		password: { type: String },
		fullname: { type: String },
		dateOfBirth: { type: Date },
		isActive: { type: Boolean, default: true },
		state: { type: mongoose.SchemaTypes.ObjectId, ref: "states" },
	},
	{ timestamps: true }
);

const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;
