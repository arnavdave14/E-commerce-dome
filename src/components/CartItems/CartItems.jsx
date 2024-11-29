import { useContext, useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { ShopContext } from "../../Context/ShopContext.jsx";
import remove_icon from "../Assets/cart_cross_icon.png";
import {
  CartItemsBody,
  CartItemsformatmain,
  CartItemsformatmianbody,
  CartItemsformat,
  CartProducticon,
  CartItemsQuantiybtn,
  CartItemsremoveimg,
  CartItemsformatmainhr,
  CartItemsPromobody,
  CartItemsDown,
  CartItemstotal,
  Cartitemstotalitems,
  CartItemsPromocode,
  CartItemsPromobox,
  CartItemsPromobtn,
} from "./CartItems.js";

// Stripe payment function
const CartItems = () => {
  const { cartItems = {}, all_product = [], removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (all_product && cartItems) {
      setIsLoading(false);
    }
  }, [all_product, cartItems]);

  // Handle the payment logic
  const handlePayment = async (event) => {
    event.preventDefault();

    // Check if stripe and elements are loaded
    if (!stripe || !elements) {
      console.log("Stripe.js or Elements is not loaded yet.");
      return;
    }

    setPaymentProcessing(true);

    // Get the CardElement instance
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.error("CardElement not available");
      alert("Card input element is not available.");
      setPaymentProcessing(false);
      return;
    }

    try {
      // Create a payment intent on the server
      const response = await fetch("http://localhost:3000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: getTotalCartAmount() * 100 }),
      });

      if (!response.ok) {
        throw new Error("Failed to create payment intent.");
      }

      const { clientSecret } = await response.json();

      // Confirm the payment with Stripe
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (paymentResult.error) {
        alert(`Payment failed: ${paymentResult.error.message}`);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment succeeded!");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("An error occurred. Please try again.");
    }

    setPaymentProcessing(false);
  };

  if (isLoading) {
    return <p>Loading cart items...</p>;
  }

  return (
    <CartItemsBody>
      <CartItemsformatmain>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </CartItemsformatmain>
      <CartItemsformatmainhr />

      {all_product.length > 0 ? (
        all_product.map((e) => {
          if (cartItems[e.id] && cartItems[e.id] > 0) {
            return (
              <CartItemsformatmianbody key={e.id}>
                <CartItemsformat>
                  <CartProducticon src={e.image} />
                  <p>{e.name}</p>
                  <p>₹{e.new_price}</p>
                  <CartItemsQuantiybtn>{cartItems[e.id]}</CartItemsQuantiybtn>
                  <p>₹{e.new_price * cartItems[e.id]}</p>
                  <CartItemsremoveimg
                    src={remove_icon}
                    onClick={() => removeFromCart(e.id)}
                  />
                </CartItemsformat>
                <CartItemsformatmainhr />
              </CartItemsformatmianbody>
            );
          }
          return null;
        })
      ) : (
        <p>No products in the cart.</p>
      )}

      <CartItemsPromobody>
        <CartItemsDown>
          <CartItemstotal>
            <h1>Cart Totals</h1>
          </CartItemstotal>
          <Cartitemstotalitems>
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </Cartitemstotalitems>
          <CartItemsformatmainhr />
          <Cartitemstotalitems>
            <p>Shipping Fee</p>
            <p>Fee</p>
          </Cartitemstotalitems>
          <CartItemsformatmainhr />
          <Cartitemstotalitems>
            <p>Total</p>
            <p>₹{getTotalCartAmount()}</p>
          </Cartitemstotalitems>
          <hr />
          <form onSubmit={handlePayment}>
            <CardElement />
            <button type="submit" disabled={paymentProcessing}>
              {paymentProcessing ? "Processing..." : "Pay"}
            </button>
          </form>
        </CartItemsDown>

        <CartItemsPromocode>
          <p>If you have a Promo code, Enter it here</p>
          <CartItemsPromobox>
            <input type="text" placeholder="Promo Code" />
            <CartItemsPromobtn>Submit</CartItemsPromobtn>
          </CartItemsPromobox>
        </CartItemsPromocode>
      </CartItemsPromobody>
    </CartItemsBody>
  );
};

export default CartItems;
