const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

//@desc Register a users
//@route GET /api/users/register
//@access public
const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    if (!username || !email || !password) {
      res.status(404);
      throw new Error("All Field is mandatory");
    }

    const userAvailable = await User.findOne({ email: email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered");
    }

    // Hash password 10 round
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400);
      throw new Error("User Data not Valid");
    }
  } catch (err) {
    next(err);
  }
};

//@desc Current users
//@route GET /api/users/current
//@access private
const currentUser = (req, res, next) => {
  res.status(200).json({ message: "Current Ok" });
};

//@desc Login users
//@route POST /api/users/login
//@access public
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All field are mandatory");
    }

    const user = await User.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken: accessToken });
    } else {
      res.status(400);
      throw new Error("Email or Password incorrect");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser, loginUser, currentUser };
