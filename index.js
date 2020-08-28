import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// import .env(DB_URL, Server_Port)
import config from "./config/index";
const { DB_URL, SERVER_PORT } = config;

const app = express();

import User from "./models/User";

// Middle-ware
app.use(morgan("dev"));

// body-parser, cookie-parser
app.use(express.json());
app.use(cookieParser());

// mongoose.connect();
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Root page");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  // Save-Data-Base
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/login", (req, res) => {
  //Find Email at DB
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "해당 이메일에 해당하는 유저가 없습니다.",
      });
    }
    //Check Password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      //Make Token
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //save Token at Cookie
        res
          .cookie("X_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._Id, token: user.token });
      });
    });
  });
});
app.listen(SERVER_PORT, (req, res) => {
  console.log(`Server on port ${SERVER_PORT}`);
});
