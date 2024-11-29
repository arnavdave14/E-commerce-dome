import { createContext, useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import all_product from '../components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserId(user.uid);

        // Fetch user profile data
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }

        // Fetch cart data
        const cartRef = doc(db, 'users', user.uid, 'cart', 'items');
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
          setCartItems(cartSnap.data());
        } else {
          setCartItems({});
        }
      } else {
        setUserData(null);
        setCartItems({});
      }
    });

    return () => unsubscribe();
  }, []);

  const updateCart = async (newCartItems) => {
    if (userId) {
      const cartRef = doc(db, 'users', userId, 'cart', 'items');
      await setDoc(cartRef, newCartItems, { merge: true });
      setCartItems(newCartItems);
    }
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const itemInfo = all_product.find((product) => product.id === Number(itemId));
      return itemInfo ? total + itemInfo.new_price * quantity : total;
    }, 0);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      };
      updateCart(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: Math.max((prev[itemId] || 1) - 1, 0),
      };
      updateCart(updatedCart);
      return updatedCart;
    });
  };

  // Function to get total items in cart
  const getTotalCartItem = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        userData,
        addToCart,
        removeFromCart,
        updateCart,
        getTotalCartItem,  // Provide the function here
        getTotalCartAmount,
        all_product,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
