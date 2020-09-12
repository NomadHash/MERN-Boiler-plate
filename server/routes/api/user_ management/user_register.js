import express from "express";

//import MongoDB Model
import User from "../../../models/User";

const router = express.Router();

router.post("/", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      return res.json({
        registerSuccess: false,
        message: "이미 존재하는 이메일 입니다.",
      });
    } else {
      console.log(req.body);
      const user = new User(req.body);

      // Save-Data-Base
      user.save((err, _) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
          success: true,
        });
      });
    }
  });
});

export default router;
