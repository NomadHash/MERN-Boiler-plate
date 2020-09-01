import express from "express";
import auth from "../../../middleware/auth";

//import MongoDB Model
import User from "../../../models/User";

const router = express.Router();

// Logout
router.get("/", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

export default router;
