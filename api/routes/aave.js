const express = require("express");
const router = express.Router();
const AaveControllers = require("../controllers/aave.js");

router.get("/",AaveControllers.Data);

module.exports = router;
// export default router;