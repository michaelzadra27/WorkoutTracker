var path = require("path");

const router = require("express").Router();



router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})


router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"../public/index.html"))
    console.log("In Index")
})











module.exports = router;