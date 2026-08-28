const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    inputFormat: {
        type: String,
        required: true
    },

    outputFormat: {
        type: String,
        required: true
    },

    constraints: {
        type: String,
        required: true
    },

    testCases: [
    {
        input: {
            type: String,
            required: true
        },
        expectedOutput: {
            type: String,
            required: true
        }
    }
]
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;