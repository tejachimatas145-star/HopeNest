
import Contact from "../models/Contact.js";

// Submit a contact message
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid input"
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message
    });

    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully",
      data: contact
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to submit your message"
    });
  }
};


// Get all contact messages
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to retrieve messages"
    });
  }
};
