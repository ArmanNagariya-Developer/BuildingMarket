const cookieParser = require("cookie-parser");
const session = require("express-session");
const express = require("express");
const mongos = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const categoryRouters = require("../Server/routes/categories")

const authregisterRouters = require("./routes/authregister")

const authloginRouter = require('./routes/authlogin')

const productRoutes = require("./routes/products")

const orderDetailsRoutes = require("./routes/orderdetails")

const userContactUs = require("./routes/contactus")

app.use(express.json());

// parse requests of content-type - application/
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET,POST'],
    credentials: true,
  }));

app.use(bodyParser.json());

app.use(cookieParser());

// Configure the session middleware to use our store
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

//  Connecting to MongoDB database
mongos.connect("mongodb://127.0.0.1:27017/BuildingMarketDB");

app.use("/category", categoryRouters)

app.use("/products", productRoutes)

app.use("/orderDetails",orderDetailsRoutes)

app.use("/register",authregisterRouters)

app.use("/login",authloginRouter)

app.use("/", authloginRouter)

app.use("/logout",authloginRouter)

app.use("/contactus",userContactUs)


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

