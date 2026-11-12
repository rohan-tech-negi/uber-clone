const express = require('express')
const router = express.Router()

const {body} = require("express-validator")
const captainController = require("../controllers/captain.controllers")

router.post('/register', [
    
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 character long"),
      body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("color must be 3 character long"),
      body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("plate must be 3 character long"),
      body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("capacity must be at least 1"),
       body("vehicle.vehicleType")
      .isIn(['car', 'motorcycle', 'auto'])
      .withMessage("Invalid entry"),
  
], captainController.registerCaptain)


module.exports = router