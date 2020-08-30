import User from "../models/User";

let auth = (req, res, next) => {
  // 인증 처리.
  // 클라이언트 쿠키에서 토큰을 가져옴.
  let token = req.cookies.x_auth;
  // 토큰을 복호화 한뒤 유저를 찾기.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true, token: token });
    console.log(token);
    req.token = token;
    req.user = user;
    next();
  });

  //유저가 있으면 인증 허가
  //없으면 불허가
};

export default auth;
