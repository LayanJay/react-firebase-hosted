import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as emailjs from 'emailjs-com';

interface FormValues {
  firstName: string;
  lastName: string;
  discordUsername: string;
  twitterUsername: string;
  referralCode?: string; // Referral code is optional
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  discordUsername: '',
  twitterUsername: '',
  referralCode: '', // Initialize as empty string but it's optional
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  discordUsername: Yup.string().required('Required'),
  twitterUsername: Yup.string().required('Required'),
  referralCode: Yup.string(), // No validation rule required, as it's optional
});

const generateReferralCode = () => {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base 36 for a compact representation
  const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
  return timestamp + randomString; // Combine them to form a unique referral code
};

const SignupForm = () => {
  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    try {
      // Assume handling of form submission remains the same
      // Adjusted to include new fields and exclude removed ones
      const emailjsParams = {
        firstName: values.firstName,
        lastName: values.lastName,
        discordUsername: values.discordUsername,
        twitterUsername: values.twitterUsername,
        referralCode: values.referralCode // Optional, handled gracefully by your backend/email service
      };
      const response = emailjs.send('service_fm54fcz', 'template_tfzsykb', emailjsParams, 'dHRgiedF_M9tXZwlc');
      console.log(response);
      toast.success("Signup successful!", {
        position: 'bottom-right'
      });
      resetForm();
    } catch (error) {
      toast.error("Signup unsuccessful!", {
        position: 'bottom-right'
      });
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
              <Field className="formEntry formFName" type="text" name="firstName" placeholder="First Name" />
              <ErrorMessage name="firstName" component="div" className='errorMessage' />

              <Field className="formEntry formLName" type="text" name="lastName" placeholder="Last Name" />
              <ErrorMessage name="lastName" component="div" className='errorMessageLast' />
            </div>

            <div className="formEntryContainer">
              <Field className="formEntry" type="text" name="discordUsername" placeholder="Discord Username" />
              <ErrorMessage name="discordUsername" component="div" className='errorMessage' />
            </div>

            <div className="formEntryContainer">
              <Field className="formEntry" type="text" name="twitterUsername" placeholder="Twitter Username" />
              <ErrorMessage name="twitterUsername" component="div" className='errorMessage' />
            </div>

            <div className="formEntryContainer">
              <Field className="formEntry" type="text" name="referralCode" placeholder="Referral Code (Optional)" />
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