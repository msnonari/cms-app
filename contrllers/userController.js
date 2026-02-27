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
    res.send("Record added.");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

export const getAllUsers = async (req, res) => {
  const data = await User.find();
  res.json(data);
};

export const registerUser = (req, res) => {
  res.render("register");
};
