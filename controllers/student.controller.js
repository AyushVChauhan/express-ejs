const studentModel = require("../models/student.model");

async function getAllStudents(req, res, next) {
	const students = await studentModel.find({ isActive: true });
	res.render("index", { students: students });
}

async function getSingleStudent(req, res, next) {
	const id = req.params.studentId;
	const student = await studentModel.findOne({ _id: id }).populate("state");
	console.log(student);
	res.render("single-student", { student: student });
}

async function addStudent(req, res, next) {
	const { username, password, dateOfBirth, fullname } = req.body;

	const newStudent = new studentModel({
		username: username,
		password: password,
		fullname: fullname,
		dateOfBirth: new Date(dateOfBirth),
	});
	await newStudent.save();

	res.redirect("/");
}

module.exports = { getAllStudents, getSingleStudent, addStudent };
