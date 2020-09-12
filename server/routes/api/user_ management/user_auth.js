import express from "express";
import auth from "../../../middleware/auth";

const router = express.Router();

router.get("/", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    profileImage: req.user.profileImage,
  });
});

export default router;
