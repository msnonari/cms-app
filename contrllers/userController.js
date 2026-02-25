import { User } from "../models/User.js";

export const addUser = async (req, res) => {
  try {
    const user = new User({
      firstName: "Kashif",
      lastName: "Saleem",
      email: "kashif@gmail.com",
      password: "5544sdfsd",
      mobile: "0300-4235656",
      address: "Lahore",
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
