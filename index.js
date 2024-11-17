require("dotenv").config();
const express = require("express");

const { dbConnect } = require("./utils/db.util");
const studentModel = require("./models/student.model");
const stateModel = require("./models/state.model");
const studentControllers = require("./controllers/student.controller");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", studentControllers.getAllStudents);
app.get("/student/:studentId", studentControllers.getSingleStudent);
app.post("/", studentControllers.addStudent);

app.get("/state", async (req, res, next) => {
	const state = new stateModel({ state: "Gujarat" });
	await state.save();
	res.redirect("/");
});

dbConnect()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log("http://localhost:3000/");
		});
	})
	.catch(() => {
		console.log("DB ERROR");
	});
