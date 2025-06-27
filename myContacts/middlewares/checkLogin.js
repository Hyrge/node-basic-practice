const jwt = require("jsonwebtoken")
require("dotenv").config()
const jwtScret = process.env.JWT_SECRET


const checkLogin = (req, res, next) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // 캐시 없음, 저장 X, 캐시만료 시 원본 서버에 유효성 확인

  const token = req.cookies.token;
  if(!token) {
    return redirect("/");
  }

  try {
    const decoded = jwt.verify(token, jwtScret);
    req.username = decoded.username;
    next();

  } catch (error) {
    console.error(error);
    return res.status(401).json({message : "로그인이 필요한 페이지 입니다"});    
  }
  
}

module.exports = checkLogin;