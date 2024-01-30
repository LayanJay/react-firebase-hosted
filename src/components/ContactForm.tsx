import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  message: Yup.string().required('Required'),
});

const ContactForm = () => {
  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    console.log(values)
    try {
       await axios.post('https://draft-test-3-gcvsqu662-invisiblextanx.vercel.app/api/send-email', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        message: values.message
      },{
        headers: {
          Authorization: 'Bearer abqBs0TqKZJ7jowRPUtpPDWf',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      // if success
      toast.success("Message sent successfully!", {
        position: 'bottom-right'
      })

      resetForm();
    } catch (error) {
      toast.error("Message unsuccessful!", {
        position: 'bottom-right'
      })
      console.error((error as any).message);
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
                <Field
                    className="formEntry formFName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                />
                <ErrorMessage name="firstName" component="div" />

                <Field
                    className="formEntry formLName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />
                <ErrorMessage name="lastName" component="div" />
              </div>
              <div className="formEntryContainer">
                <Field
                    className="formEntry formEmail"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="formEntryContainer">
                <Field
                    className="formEntry formMessage"
                    as="textarea"
                    name="message"
                    placeholder="Your message"
                />
                <ErrorMessage name="message" component="div" />
              </div>
              <div>
                <button className="buttonGeneral formSubmit" type="submit" disabled={isSubmitting}>
                  SUBMIT
                </button>
              </div>
            </Form>
        )}
      </Formik>
      </React.Fragment>
  );
};

export default ContactForm;
