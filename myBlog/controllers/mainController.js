const main = ("/", (req, res) => {
  res.render("index", { title: "My Blog" });
});

module.exports = {
  main
};