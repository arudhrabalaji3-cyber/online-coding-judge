const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const {
    getProblems,
    createProblem,
    getProblemById,
    updateProblem,
    deleteProblem
} = require("../controllers/problemController");

const router = express.Router();

router.get("/", getProblems);
router.post("/", authMiddleware, createProblem);
router.get("/:id", getProblemById);
router.put("/:id", updateProblem);
router.delete("/:id", deleteProblem);

module.exports = router;