const express = require("express");
// const { processPayment, sendStripeApiKey } = require("../controllers/paymentController");
const { processPayment, sendStripeApiKey } = require("./paymentController");
const router = express.Router();
// const {isAuthenticatedUser} = require("../middleware/auth");
const {isAuthenticatedUser} = require("./auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);
module.exports = router;