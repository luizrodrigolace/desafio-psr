const express = require("express");
const sequelize = require("./config/database");
const routes = require("./routes/routes");
const app = express();


sequelize.sync().then(() => console.log("database connected successfully"));

app.use(express.json());

app.use(routes);
//app.use("/api/products",productRoutes)

app.listen(3000, () => {
  console.log("Server started on port 3000");
});