const express = require('express')
const {
    connectPayouts,
    getBalance,
    paymentSuccess,
} = require("../controllers/payments.js");
const { requireSignIn } = require("../middlewares/index.js");

const router = express.Router();

router.post("/connect-payouts", requireSignIn, connectPayouts);
router.post("/payment-success", requireSignIn, paymentSuccess);
router.get("/get-balance", requireSignIn, getBalance);

module.exports = router;
