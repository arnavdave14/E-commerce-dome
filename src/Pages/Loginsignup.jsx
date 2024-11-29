import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { Loginsignupbody, LoginsignupContainer, LoginsignupContainerspan, LoginsignupField, LoginsignupBtn, LoginsignupLogin, Loginsignupspan, LoginsignupAgree } from './Js/LoginSignup';

const Loginsignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(false); // Toggle between login and signup
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAuth = async () => {
    try {
      if (isLogin) {
        // Login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Navigate to the home page or cart page
        navigate('/'); // Redirect to home page after login
      } else {
        // Sign-up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          uid: user.uid,
        });

        alert('Account created successfully');
        setIsLogin(true); // Switch to login screen after signup
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Loginsignupbody>
      <LoginsignupContainer>
        <h1>{isLogin ? 'Login' : 'Sign'} <LoginsignupContainerspan>{isLogin ? 'in' : 'up'}</LoginsignupContainerspan></h1>
        <LoginsignupField>
          {!isLogin && <input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />}
          <input type='email' placeholder='Your Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </LoginsignupField>
        <LoginsignupBtn onClick={handleAuth}>{isLogin ? 'Login' : 'Continue'}</LoginsignupBtn>
        <LoginsignupLogin>
          {isLogin ? "Don't have an account?" : "Already have an Account?"}
          <Loginsignupspan onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? ' Sign up here' : ' Login here'}
          </Loginsignupspan>
          <LoginsignupAgree>
            <input type='checkbox' />
            <p>By continuing, I agree to the Terms of use & Privacy Policy</p>
          </LoginsignupAgree>
        </LoginsignupLogin>
      </LoginsignupContainer>
    </Loginsignupbody>
  );
};

export default Loginsignup;
