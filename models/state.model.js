const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
	{
		state: { type: String },
	},
	{ timestamps: true }
);

const stateModel = mongoose.model("states", stateSchema);
module.exports = stateModel;
