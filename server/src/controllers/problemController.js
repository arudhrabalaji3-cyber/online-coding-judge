const Problem = require("../models/Problem");

const getProblems = async (req, res) => {
    try {
        const problems = await Problem.find();

        res.json(problems);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch problems"
        });
    }
};

const createProblem = async (req, res) => {
    try {
        const problem = await Problem.create(req.body);

        res.status(201).json(problem);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create problem"
        });
    }
};

const getProblemById = async (req, res) => {
    try {
        const problem = await Problem.findById(req.params.id);

        if (!problem) {
            return res.status(404).json({
                message: "Problem not found"
            });
        }

        res.json(problem);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch problem"
        });
    }
};

const updateProblem = async (req, res) => {
    try {
        const problem = await Problem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!problem) {
            return res.status(404).json({
                message: "Problem not found"
            });
        }

        res.json(problem);
    } catch (error) {
        res.status(500).json({
            message: "Failed to update problem"
        });
    }
};

const deleteProblem = async (req, res) => {
    try {
        const problem = await Problem.findByIdAndDelete(req.params.id);

        if (!problem) {
            return res.status(404).json({
                message: "Problem not found"
            });
        }

        res.json({
            message: "Problem deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete problem"
        });
    }
};

module.exports = {
    getProblems,
    createProblem,
    getProblemById,
    updateProblem,
    deleteProblem
};