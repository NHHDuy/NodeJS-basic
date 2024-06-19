const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ userId: req.user.id });
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};

//@desc Get 1 contact
//@route GET /api/contacts/:id
//@access private
const getContact = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const contact = await Contact.findById(contactId);
    if (!contact.userId || req.user.id != contact.userId) {
    }

    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    if (contact.userId.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User don't have permission to view other user contact.");
    }

    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

//@desc Create 1 contact
//@route POST /api/contacts
//@access private
const createContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !phone || !email) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
      // Các tên trong này phải trùng với field trong database
      name,
      email,
      phone,
      userId: req.user.id,
    });
    res.status(201).json(contact);
  } catch (err) {
    next(err);
  }
};

//@desc Update 1 contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    if (contact.userId.toString() !== req.user.id) {
      res.status(401);
      throw new Error(
        "User don't have permission to update other user contact."
      );
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } //
    );
    res.status(200).json(updatedContact);
  } catch (err) {
    next(err);
  }
};

//@desc delete 1 contact
//@route PUT /api/contacts/:id
//@access private
const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    if (contact.userId.toString() !== req.user.id) {
      res.status(401);
      throw new Error(
        "User don't have permission to delete other user contact."
      );
    }

    await contact.deleteOne();
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
