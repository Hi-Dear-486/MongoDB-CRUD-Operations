import User from "../../../models/User.js";
import express from "express";

const router = express.Router();
const server = express();
// Middleware
server.use(express.json());

// create a user
router.post("/register", async (req, res) => {
  const { name, email, password, phone, dob, gender } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
      phone,
      dob,
      gender,
    });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// get a user
router.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Get user by ID
router.get("/register/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Update user by ID (PUT method) full replace resoure
router.put("/register/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const user = await User.findByIdAndUpdate(id, updatedData, { new: true });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// partial updates
// router.patch("/register/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = req.body;

//     const user = await User.findByIdAndUpdate(id, updatedData, { new: true });

//     if (!user) {
//       return res.status(404).send({ message: "User not found" });
//     }

//     res.status(200).send({ message: "User updated successfully", user });
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// });

// delete user by ID
router.delete("/register/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
export default router;
