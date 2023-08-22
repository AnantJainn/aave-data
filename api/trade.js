const express = require("express");
const router = express.Router();
const TradeControllers = require("./trade-c.js");

// router.get("/",async(req,res)=>{
//     res.send("hello");
// })
router.get("/tokens", TradeControllers.Tokens);
router.post("/quote", TradeControllers.Quote);
router.post("/swap", TradeControllers.Swap);

module.exports = router;
// export default router;