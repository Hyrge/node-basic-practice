const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie("Kim", "1234", {httpOnly: true});
  res.send('쿠키가 설정되었습니다.');
});


app.get('/cookie', (req, res) => {  
  console.log(req.cookies); // 쿠키를 콘솔에 출력
});


app.get('/delete-cookie', (req, res) => {
  res.clearCookie("Kim");
  console.log("쿠키가 삭제되었습니다.");
});

app.listen(5000, () => {
  console.log('서버 실행 중');
});