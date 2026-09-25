const dns = require("dns");
dns.setServers(["1.1.1.1"]);

require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = 5000;


connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});