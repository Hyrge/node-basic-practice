const mongoose = require("mongoose");

// 게시물 : 관리자만 사용
const PostSchema = mongoose.Schema ({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Post", PostSchema);