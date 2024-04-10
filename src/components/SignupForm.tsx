import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/Signup.scss";
// Firebase imports
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  doc,
  updateDoc
} from "firebase/firestore";

interface FormValues {
  firstName: string;
  lastName: string;
  discordUsername: string;
  twitterUsername: string;
  email: string;
  referralCode?: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  discordUsername: '',
  twitterUsername: '',
  email: '',
  referralCode: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  discordUsername: Yup.string().required('Required'),
  twitterUsername: Yup.string().required('Required'),
  email: Yup.string().required('Required').email('Invalid email'),
  referralCode: Yup.string(),
});

const generateReferralCode = () => {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base 36 for a compact representation
  const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
  return timestamp + randomString; // Combine them to form a unique referral code
};

const SignupForm = () => {
  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    const signupsRef = collection(db, "signups");
    // Separate queries for Discord username, Twitter username, and email
    const queries = [
      query(signupsRef, where("discordUsername", "==", values.discordUsername)),
      query(signupsRef, where("twitterUsername", "==", values.twitterUsername)),
      query(signupsRef, where("email", "==", values.email)),
    ];

    let duplicateFound = false;

    for (const q of queries) {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        duplicateFound = true;
        break; // Stop checking if any duplicate is found
      }
    }

    if (duplicateFound) {
      toast.error("An entry with this information already exists.", {
        className: 'toast-error-container toast-error-container-after',
        progressClassName: 'toast-error-progress',
      });
      setSubmitting(false);
    } else {
      let referralValid = true;
      if (values.referralCode) {
        const referralQuery = query(signupsRef, where("rID", "==", values.referralCode));
        const querySnapshot = await getDocs(referralQuery);
        referralValid = !querySnapshot.empty;
        
        if (referralValid) {
          // Increment points for the user who owns the referral code
          const referrerDocRef = doc(db, "signups", querySnapshot.docs[0].id);
          await updateDoc(referrerDocRef, {
            points: (querySnapshot.docs[0].data().points || 0) + 1
          });
        } else {
          toast.error("Referral code not found.", {
            className: 'toast-error-container toast-error-container-after',
            progressClassName: 'toast-error-progress',
          });
          setSubmitting(false);
          return; // Exit the function early
        }
      }

      const rID = generateReferralCode(); // Generate the referral code
      try {
        await addDoc(signupsRef, {
          ...values,
          rID, // Include the generated referral code
          points: 1, // Initialize points to 1 for the new user
          createdAt: serverTimestamp()
        });
        // Success toast includes the referral code
        toast.success(`Signup successful! Your referral code is: ${rID}`, {
          className: 'toast-success-container toast-success-container-after',
          progressClassName: 'toast-success-progress',
        });
        resetForm();
      } catch (error) {
        console.error("Error adding document: ", error);
        toast.error("Signup unsuccessful!", {
          className: 'toast-error-container toast-error-container-after',
          progressClassName: 'toast-error-progress',
        });
      }
      setSubmitting(false);
    }
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
              <Field name="discordUsername" type="text" placeholder="Discord Username" className="formEntry" />
              <ErrorMessage name="discordUsername" component="div" className='errorMessage' />
            </div>

            <div className="formEntryContainer">
              <Field name="twitterUsername" type="text" placeholder="Twitter Username" className="formEntry" />
              <ErrorMessage name="twitterUsername" component="div" className='errorMessage' />
            </div>

            <div className="formEntryContainer">
              <Field name="email" type="text" placeholder="Email (for referral code)" className="formEntry" />
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