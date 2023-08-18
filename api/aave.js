// const express = require("express");
// const router = express.Router();
// const AaveControllers = require("../controllers/aave.js");

// router.get("/",AaveControllers.Data);

// module.exports = router;
// // export default router;

const express = require("express");
const router = express.Router();
const AaveControllers = require("./aavec.js");

router.get("/", (req, res) => {
    res.send("Anant Gauranshi deployed it 🥳");
});

router.get("/aave", AaveControllers.Data);

module.exports = router;
