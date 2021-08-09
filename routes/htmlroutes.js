//Import Path to server public static files
const path = require("path");
const router = require("express").Router();

//Render Index HTML
router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})

//Render stats.html
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  //Render exercise.html
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"../public/index.html"))
    
})

module.exports = router;

