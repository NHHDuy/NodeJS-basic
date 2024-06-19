const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};

//@desc Get 1 contact
//@route GET /api/contacts/:id
//@access public
const getContact = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const contact = await Contact.findById(contactId);

    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

//@desc Create 1 contact
//@route POST /api/contacts
//@access public
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
    });
    res.status(201).json(contact);
  } catch (err) {
    next(err);
  }
};

//@desc Update 1 contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
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
//@access public
const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
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
