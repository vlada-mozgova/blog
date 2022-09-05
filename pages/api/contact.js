import { connectDatabase, insertDocument } from "../../helpers/db-utils";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connectiong to the database failed!" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    try {
      const result = await insertDocument(client, "messages", newMessage);
      newMessage.id = result.insertedId;
      res
        .status(201)
        .json({ message: "Successfully stored message!", message: newMessage });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
    }
  }
};

export default handler;
