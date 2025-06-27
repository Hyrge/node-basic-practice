# node-kseb

# 5일 교육 과정

백엔드학습 
node.js(express), MongoDB, JWT 


# 1일차
- node.js 설치
- node.js 기본 문법
- 절대경로, 상대경로 -> 가급적 상대경로 사용

# 2일차 
- http 모듈 활용 서버만들기 
- 라우팅


# 3일차 
- 에러처리 미들웨어 

> 미들웨어 등록순서 
> 1. express 및 필요한 패키지 임포트(업로드)
> 2. express 인스턴스 생성 
> 3. 라우트 코드작성
> 3. 라우트 || 미들웨어 등록 (에러를 제외하고)
> 4. 오류처리 미들웨어 등록
> 5. 서버 시작


> 1. const express = require("express"); //express 및 필요한 패키지 임포트(업로드)
> 2. const app = express(); //express 인스턴스 생성 
> 3. app.get //라우트 코드작성
> 4. app.use(경로, require(라우트파일)) //라우트 || 미들웨어 등록 (에러를 제외하고)
> 5. app.use(에러) //오류처리 미들웨어 등록
> 6. app,listen(); // 서버실행 

# 4일차 
- CRUD 

# 5일차 
- 세션, 쿠키 
- JWT 인증 관련
- 블로그 만들기 실습 
