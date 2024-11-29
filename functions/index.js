const functions = require("firebase-functions");
const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = Stripe(functions.config().stripe.secret_key);
const app = express();

// Middleware to enable CORS and JSON body parsing
app.use(cors({origin: true}));
app.use(express.json());

// Test root route to ensure server is running
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Create payment intent endpoint
app.post("/create-payment-intent", async (req, res) => {
  const {amount} = req.body; // The amount sent from the frontend

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in cents
      currency: "inr", // Currency (you can change this)
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});

// Firebase Function to handle the Express app
exports.api = functions.https.onRequest(app);
