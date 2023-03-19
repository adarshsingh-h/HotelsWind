const User = require("../models/user.js");
const Order = require("../models/order.js");

exports.connectPayouts = async (req, res, next) => {
    try {
        const { email, accountNumber, ifscCode } = req.body;

        if (!accountNumber || accountNumber.length != 12) {
            return res
                .status(400)
                .send(
                    "Account Number is required and it should be of 12 digits"
                );
        }

        if (!ifscCode) {
            return res.status(400).send("IFSC Code is required.");
        }
        let user = await User.findOne({ email: email }).exec();
        user.isConnectedForPayouts = true;
        user.accountNumber = accountNumber;
        user.ifscCode = ifscCode;

        user.save();

        return res.json({
            ok: true,
        });
    } catch (err) {
        return res.status(400).send("Something went wrong, Please try again.");
    }
};

exports.paymentSuccess = async (req, res) => {
    try {
        const { hotelId, userId, postedById, price } = req.body;

        const order = new Order({
            hotelId: hotelId,
            userId: userId,
        });

        await order.save();

        const currBal = await User.findById(postedById)
            .select("balance")
            .exec();

        console.log(price);

        await User.findByIdAndUpdate(
            postedById,
            { balance: currBal.balance + price },
            {
                new: true,
            }
        ).exec();

        res.json({
            ok: true,
        });
    } catch (error) {
        res.status(400).send("Payment failed, please try again.");
    }
};

exports.getBalance = async (req, res) => {
    try {
        const userId = req.headers.userid;

        let bal = await User.findOne({ _id: userId }).select("balance").exec();
        console.log(bal);

        res.json({
            balance: bal,
        });
    } catch (error) {
        res.status(400).send("Unable to fetch your balance.");
    }
};
