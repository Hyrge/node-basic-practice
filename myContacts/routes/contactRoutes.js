const express = require("express");
const router = express.Router();

const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");

const {
  getAllContacts,
  creatContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
  updateContactForm
} = require("../controllers/contactController")

router.use(cookieParser());

// 모든 연락처 가져오기
// router.route("/contacts")
router
.route("/")
.get(checkLogin, getAllContacts) // 로그인 체크
// .post(creatContact); // 생성하기

//연락처 추가하기 
router
.route("/add")
.get(checkLogin, addContactForm)
.post(checkLogin, creatContact) // 생성하기
// .post(updateContactForm);

// 연락처 수정하기 : route("/contacts/:id")
router
.route("/:id")
.get(checkLogin, getContact) //수정하기 
.put(checkLogin, updateContact)
.delete(checkLogin, deleteContact); // 삭제하기 

module.exports = router;