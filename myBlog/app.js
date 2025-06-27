// 웹 서버 실행
const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");
const app = express();  // 앱서버 생성
const port = 3000;      // 포트번호 지정
   
app.set("view engine", "ejs"); //템플릿 엔진을 사용하겠다
app.set("views", "./views"); //템플릿 파일이 있는 경로설정
app.use(express.static("./public")); // 정적 html 설정
app.use(methodOverride("_method"))

dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use("/", require("./routes/main"));
// app.use("/contacts", require("./routes/contactRoutes"));


// 서버 실행
app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
}); 