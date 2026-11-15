const userModel = require("../models/user.models");
const blacklistTokenModel = require("../models/blacklisttoken.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
  if (!token) {
    return res.status(401).json({ message: "unauthozised" });
  }

  const isBlackListed  = await blacklistTokenModel.findOne({token: token})

  if(isBlackListed){
    return res.status(401).json({message: "Unauthorized"})
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
};

module.exports.authCaptain = async(req,res,next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

  if(!token){
    return res.status(401).json({message: 'Unauthozied'})
  }
  const isBlackListed = await blacklistTokenModel.findOne({token: token})

  if(isBlackListed){
    return res.status(401).json({message: 'Unauthozied'})
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const captain = await captainModel.findById(decoded._id)
    req.captain = captain;
  } catch (error) {
    res.status(401).json({message: 'Unauthozied'})
  }
}
