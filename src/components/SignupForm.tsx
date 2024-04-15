import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { db } from "../../firebase";
import {
  collection, addDoc, serverTimestamp, query, where, getDocs
} from "firebase/firestore";

interface FormValues {
  firstName: string;
  lastName: string;
  referralCode?: string;
  email: string;
  walletAddress: string;
  points: number;
  discordID?: string; // Optional Discord ID
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  referralCode: '',
  email: '',
  walletAddress: '',
  points: 0,
  discordID: '', // Initialize Discord ID as empty
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
  const [discordID, setDiscordID] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      verifyDiscordConnection(code).then(({ isConnected, discordID }) => {
        if (isConnected) {
          setDiscordConnected(true);
          setDiscordID(discordID); // Save the Discord ID
        }
        navigate('/signup');
      });
    }
  }, [searchParams]);

  const handleDiscordConnect = () => {
    if (!isDiscordConnected) {
      window.location.href = 'https://discord.com/oauth2/authorize?client_id=1227756790582607982&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fsignup&scope=identify+guilds+guilds.join+connections';
    }
  };

  const verifyDiscordConnection = async (code: string): Promise<{ isConnected: boolean, discordID: string }> => {
    try {
      const response = await fetch('/api/verify-discord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });
      const data = await response.json();
      return { isConnected: data.isConnected, discordID: data.discordID || '' };
    } catch (error) {
      console.error('Error verifying Discord connection:', error);
      return { isConnected: false, discordID: '' };
    }
  };

  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    setSubmitting(true);
    const signupsRef = collection(db, "signups");
    const emailQuery = query(signupsRef, where("email", "==", values.email));
    const walletQuery = query(signupsRef, where("walletAddress", "==", values.walletAddress));

    try {
      const [emailSnapshot, walletSnapshot] = await Promise.all([
        getDocs(emailQuery),
        getDocs(walletQuery)
      ]);

      if (!emailSnapshot.empty || !walletSnapshot.empty) {
        toast.error("Information already submitted", { position: 'top-right', style: { backgroundColor: 'red' }});
        setSubmitting(false);
        return; // Early return to stop processing if the email or wallet address already exists
      }

      let initialPoints = 1; // Default points for required fields

      if (values.referralCode) {
        const referralQuery = query(signupsRef, where("rID", "==", values.referralCode));
        const referralSnapshot = await getDocs(referralQuery);
        if (!referralSnapshot.empty) {
          initialPoints++; // Add 1 point for a valid referral
        } else {
          toast.error("Error: referral code not found", { position: 'top-right', style: { backgroundColor: 'red' }});
          setSubmitting(false);
          return; // Early return to stop processing if referral code is invalid
        }
      }

      if (isDiscordConnected) {
        initialPoints++; // Add 1 point for a connected Discord account
      }

      const rID = `ID${Date.now().toString().slice(-8)}`;
      values.discordID = discordID; // Assign the Discord ID to form values before submitting
      await addDoc(signupsRef, {
        ...values,
        points: initialPoints,
        createdAt: serverTimestamp(),
        rID: rID
      });
      toast.success(`Signup successful! Your referral code is ${rID}`, { position: 'top-right', style: { backgroundColor: 'black' }});
      resetForm({ values: { ...initialValues, points: initialPoints, discordID: discordID } });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Signup unsuccessful!", { position: 'top-right', style: { backgroundColor: 'black' }});
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
              <button type="button" className="buttonSocials" onClick={handleDiscordConnect} disabled={isDiscordConnected}>
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
