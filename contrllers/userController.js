import { User } from "../models/User.js";

export const addUser = async (req, res) => {
  const { fname, lname, mail, pwd, mob, addr } = req.body;
  try {
    const user = new User({
      firstName: fname,
      lastName: lname,
      email: mail,
      password: pwd,
      mobile: mob,
      address: addr,
    });

    await user.save();

    console.log("Record added.");
    res.redirect("/login");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

export const getAllUsers = async (req, res) => {
  const data = await User.find();
  res.json(data);
};

export const loginUser = async (req, res) => {
  const { mail, pwd } = req.body;
  try {
    const user = await User.findOne({ email: mail });
    if (user && user.password == pwd) {
      req.session.user = {
        id: user._id,
        email: user.email,
      };
      res.redirect("/dashboard");
    } else {
      res.send("<h1>Invalid Email or Password!</h1>");
    }
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

export const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
};
