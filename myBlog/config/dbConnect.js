const mongoose = require("mongoose"); // 몽고디비 사용을 위해 
require("dotenv").config(); // .env의 환경변수사용을 위해

//db 연결 함수 정의
const dbConnect = async() => {
  try{
    const content = await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB 연결됨");
  } catch {
    console.log(err);
  }
}

module.exports = dbConnect;