require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");
const categoryRoutes = require("./routes/category.js");
const productRoutes = require("./routes/product.js");
const orderRoutes = require("./routes/order.js");

// DB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
// app.use(
//   cors({
//       origin: process.env.CLIENT_URL,
//       methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
//       allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token", "Access-Control-Allow-Origin"],
//       credentials: true,
//       exposedHeaders: ["*", "Authorization"],
//   })
// );
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


//routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

//Starting a server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
