const express = require("express");
const router = express.Router();
const AaveControllers = require("./aave-c.js");

router.get("/", async (req, res) => {
    res.send("hello AJ");
})
router.get("/aave", AaveControllers.Data);

module.exports = router;
// export default router;