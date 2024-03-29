const mongoose = require('mongoose')

const { Schema } = mongoose;

const hotelSchema = new Schema(
    {
        title: {
            type: String,
            required: "Title is required",
        },
        content: {
            type: String,
            required: "Content is required",
            maxlength: 10000,
        },
        location: {
            type: String,
        },
        price: {
            type: Number,
            required: "Price is required",
            trim: true,
        },
        postedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        imageData: {
            type: Buffer,
        },
        imageContentType: {
            type: String,
        },
        from: {
            type: Date,
        },
        to: {
            type: Date,
        },
        bed: {
            type: Number,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);
