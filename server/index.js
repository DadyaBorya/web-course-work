const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const models = require('./models/models');
const routes = require("./routes/routes");
const errorHandler  = require("./middleware/ErrorHandlingMiddleware")
const cors = require("cors");
require('dotenv').config()

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors())
app.use("/uploads", express.static("uploads"))
app.use(bodyParser.json());
app.use("/api", routes)
app.use(errorHandler)


sequelize
    .sync()
    .then(() => {
        console.log('Database and tables synced');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
