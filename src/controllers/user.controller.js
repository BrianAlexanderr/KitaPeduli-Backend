// src/controllers/user.controller.js
import prisma from "../utils/prisma.js";

const createUser = async (req, res) => {
  try {
    const { id_firebase, name, email, phone } = req.body;

    if (!id_firebase || !name || !email) {
      return res.status(400).json({ error: "id_firebase, name, and email are required" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { id_firebase },
    });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: { id_firebase, name, email, phone },
    });

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default createUser;


