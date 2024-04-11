import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// Firebase imports
import { db } from "../../firebase";
// Import additional Firestore functionalities
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface FormValues {
  firstName: string;
  lastName: string;
  discordUsername: string;
  twitterUsername: string;
  referralCode?: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  discordUsername: '',
  twitterUsername: '',
  referralCode: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  discordUsername: Yup.string().required('Required'),
  twitterUsername: Yup.string().required('Required'),
  referralCode: Yup.string(),
});

const SignupForm = () => {
  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    try {
      const signupsRef = collection(db, "signups");
      await addDoc(signupsRef, {
        ...values,
        createdAt: serverTimestamp()
      });
      toast.success("Signup successful!", {
        position: 'bottom-right'
      });
      resetForm();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Signup unsuccessful!", {
        position: 'bottom-right'
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
            <Field name="firstName" type="text" placeholder="First Name" />
            <ErrorMessage name="firstName" component="div" />
            
            <Field name="lastName" type="text" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="div" />

            <Field name="discordUsername" type="text" placeholder="Discord Username" />
            <ErrorMessage name="discordUsername" component="div" />

            <Field name="twitterUsername" type="text" placeholder="Twitter Username" />
            <ErrorMessage name="twitterUsername" component="div" />

            <Field name="referralCode" type="text" placeholder="Referral Code (Optional)" />
            <ErrorMessage name="referralCode" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default SignupForm;
