const mongoose = require('mongoose')

const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        hotelId: {
            type: Schema.Types.ObjectId,
            ref: "Hotel",
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
