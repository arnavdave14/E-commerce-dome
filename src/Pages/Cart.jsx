import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CartItems from "../components/CartItems/CartItems.jsx";

// Load your Stripe public key
const stripePromise = loadStripe("pk_test_51QJFfpAXfwajDwHlzeSO12UJaASoijRaBFG0Ushn2bJNgCGsQfTXgqgr7bECQIKO8reIh1I4bFTgKOpY6IeAXCPh00VQ2P0w9J");

const Cart = () => {
  return (
    <Elements stripe={stripePromise}>
      <CartItems />
    </Elements>
  );
};

export default Cart;
