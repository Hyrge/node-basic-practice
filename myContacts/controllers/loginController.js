const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Admin = require("../models/adminSchema");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;


// Register page : GET
const getRegister = (req, res) => {
  res.render("register");
};

const registerAdmin = asyncHandler(async (req, res) => {
  const { username, password, password2 } = req.body;

  if(password == password2) {
    // db에 데이터를 저장 
    const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호 암호화
    // 이름과 암호화된 비밀번호 DB에 저장 
    const user = await Admin.create({username, password: hashedPassword});
    res.status(201).json({message: "Register successful", user}); // 새로운 데이터 넣을 때는 201 상태 코드 사용

  } else {
    res.send("Register password not same");
  }
});



//login page : GET

const getLogin = (req, res) => {
  res.render("home");
};

// login check POST
const loginUser = asyncHandler( async (req, res) => {
  const {username, password} = req.body;
  // DB에서 사용자 찾기
  const user = await Admin.findOne({username});
  if(!user) {
    return res.status(401).json({message: "일치하는 사용자 없음"}); // 사용자 없을 때
  }

  const isMatch = await bcrypt.compare(password, user.password); // 비밀번호 비교
  if(!isMatch) {
    return res.status(401).json({message: "비밀번호가 일치하지 않습니다."}); // 비밀번호 불일치
  }
  const token = jwt.sign({id: user._id}, jwtSecret); // JWT 토큰 생성
  res.cookie("token", token, {httpOnly: true}); // 쿠키에 토큰 저장
  res.redirect("/contacts"); 

  // if(username == 'admin' && password == '1234'){
  //   res.redirect("/contacts")
  // }else {
  //   res.send("fail...")
  // }
})


// logOut get
const logout = (req, res) => {
  res.clearCookie("token"); // 쿠키 삭제
  res.redirect("/"); // 홈으로 리다이렉트
};


module.exports = {getLogin, loginUser, getRegister, registerAdmin, logout,};
// Register check POST};