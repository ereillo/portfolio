const router = require("express").Router();

router.get("/about", (req, res, next) => {
  res.json("All good in here");
});

router.get("/proyects", (req, res, next) => {
  res.json("Proyectos")
})

router.get("/tv", (req, res, next) => {
  res.json("Television")
})

router.get("/articles", (req, res, next) => {
  res.json("articulos")
})

module.exports = router;



