const express = require("express");

const {
    getProblems,
    createProblem,
    getProblemById,
    updateProblem,
    deleteProblem
} = require("../controllers/problemController");

const router = express.Router();

router.get("/", getProblems);
router.post("/", createProblem);
router.get("/:id", getProblemById);
router.put("/:id", updateProblem);
router.delete("/:id", deleteProblem);

module.exports = router;