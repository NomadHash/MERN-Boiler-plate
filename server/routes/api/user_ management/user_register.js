import express from "express";

//import MongoDB Model
import User from "../../../models/User";

const router = express.Router();

router.post("/", (req, res) => {
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

export default router;
