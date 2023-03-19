const express = require("express");
const {
    create,
    hotels,
    image,
    sellerHotels,
    read,
    updateHotel,
    userHotelBookings,
    isAlreadyBooked,
    searchListings,
} = require("../controllers/hotels.js");
const formidable = require("express-formidable");
const { requireSignIn } = require("../middlewares/index.js");

const router = express.Router();

router.post("/create-hotel", requireSignIn, formidable(), create);
router.get("/hotels", hotels);
router.get("/hotel/image/:hotelId", image);
router.get("/seller-hotels", requireSignIn, sellerHotels);
router.get("/hotel/:hotelId", read);
router.put("/update-hotel/:hotelId", requireSignIn, formidable(), updateHotel);
router.get("/user-hotel-bookings", requireSignIn, userHotelBookings);
router.get("/is-already-booked/:hotelId", requireSignIn, isAlreadyBooked);
router.post("/search-listings", searchListings);

module.exports = router;
