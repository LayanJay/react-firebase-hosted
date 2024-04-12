import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Use react-router-dom for handling redirects and URL parameters

// Firebase imports
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";

interface FormValues {
  firstName: string;
  lastName: string;
  referralCode?: string;
  email: string;
  walletAddress: string;
  points: number;  // Include points in the form values
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  referralCode: '',
  email: '',
  walletAddress: '',
  points: 0, // Initialize points to zero
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  referralCode: Yup.string(),
  email: Yup.string().required('Required').email('Invalid email'),
  walletAddress: Yup.string().required('Required'),
});

const SignupForm = () => {
  const [isDiscordConnected, setDiscordConnected] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams(); // To handle URL search parameters
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      // Process the Discord OAuth2 code to verify and set connection status
      verifyDiscordConnection(code).then(isConnected => {
        setDiscordConnected(isConnected);
        navigate('/signup'); // Redirect to signup page without query params
      });
    }
  }, [searchParams]);

  const handleDiscordConnect = () => {
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1227756790582607982&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fsignup&scope=identify+connections+guilds+guilds.join';
  };

  const verifyDiscordConnection = async (code: string): Promise<boolean> => {
    // Placeholder for actual API call to your backend to verify Discord connection
    // Assuming API endpoint is /api/verify-discord and it returns { isConnected: boolean }
    try {
      const response = await fetch('/api/verify-discord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });
      const data = await response.json();
      return data.isConnected;
    } catch (error) {
      console.error('Error verifying Discord connection:', error);
      return false;
    }
  };

  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    setSubmitting(true);
    const rID = `ID${Date.now().toString().slice(-8)}`; // Generate a unique 8-digit rID
    values.points += 1; // Increment points

    const signupsRef = collection(db, "signups");

    // Check for existing email
    const emailQuery = query(signupsRef, where("email", "==", values.email));
    const emailSnapshot = await getDocs(emailQuery);
    if (!emailSnapshot.empty) {
      toast.error("Email already submitted!", {
        position: 'top-right',
        style: { backgroundColor: 'black' },
      });
      setSubmitting(false);
      return;
    }

    // Check for existing wallet address
    const walletQuery = query(signupsRef, where("walletAddress", "==", values.walletAddress));
    const walletSnapshot = await getDocs(walletQuery);
    if (!walletSnapshot.empty) {
      toast.error("Wallet already submitted!", {
        position: 'top-right',
        style: { backgroundColor: 'black' },
      });
      setSubmitting(false);
      return;
    }

    try {
      await addDoc(signupsRef, {
        ...values,
        createdAt: serverTimestamp(),
        rID: rID // Include the rID in the document
      });
      toast.success(`Signup successful! Your referral code is ${rID}`, {
        position: 'top-right',
        style: { backgroundColor: 'black' },
      });
      resetForm({ values: { ...initialValues, points: values.points } });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Signup unsuccessful!", {
        position: 'top-right',
        style: { backgroundColor: 'black' },
      });
    }

    setSubmitting(false);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="formContainer">
            <div className="formNameEntry">
              <Field name="firstName" type="text" placeholder="First Name" className="formEntry formFName" />
              <ErrorMessage name="firstName" component="div" className='errorMessage' />
              <Field name="lastName" type="text" placeholder="Last Name" className="formEntry formLName" />
              <ErrorMessage name="lastName" component="div" className='errorMessageLast' />
            </div>
            <div className="formEntryContainer">
              <button type="button" className="buttonSocials" onClick={handleDiscordConnect}>
                {isDiscordConnected ? 'Discord Connected' : 'Connect Discord'}
              </button>
              <button type="button" className="buttonSocials">Connect Twitter</button>
            </div>
            <div className="formEntryContainer">
              <Field name="walletAddress" type="text" placeholder="Wallet Address" className="formEntry" />
              <ErrorMessage name="walletAddress" component="div" className='errorMessage' />
            </div>
            <div className="formEntryContainer">
              <Field name="email" type="text" placeholder="Email" className="formEntry" />
              <ErrorMessage name="email" component="div" className='errorMessage' />
            </div>
            <div className="formEntryContainer">
              <Field name="referralCode" type="text" placeholder="Referral Code (Optional)" className="formEntry" />
              <ErrorMessage name="referralCode" component="div" className='errorMessage' />
            </div>
            <div>
              <button className="buttonGeneral formSubmit" type="submit" disabled={isSubmitting}>
                SIGN UP
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default SignupForm;