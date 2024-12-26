const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Transaction = require("../models/Transaction");

//Save Transaction

const addTransaction = async (req, res, next) => {
  console.log('how dai',req.body)
  const { amount, type, category, date } = req.body;
  try {
    const transaction = new Transaction({
      user: req.user.id,
      amount,
      type,
      category,
      date,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    console.log(err)
    res.status(400).send("Error creating transaction");
  }
};

//Get Transaction

const GetTransaction = async (req, res, next) => {
   
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
  } catch (err) {
    console.log(err)
    res.status(400).send("Error fetching transactions");
  }
};

// Delete Transaction

const DeleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find the transaction by ID and delete it
    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

//Edit Transaction PUT Req

const EditTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, amount, date, category } = req.body;

    // Find the transaction by ID and update it with new data
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { name, amount, date, category },
      { new: true } // This option returns the updated document
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {addTransaction,GetTransaction,EditTransaction,DeleteTransaction}
