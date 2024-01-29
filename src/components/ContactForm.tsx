import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

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
    try {
      const response = await axios.post('https://draft-test-3-go1qc9lcc-invisiblextanx.vercel.app/api/test', values);
      console.log(response)
      alert(JSON.stringify(response.data, null, 2));
      resetForm();
    } catch (error) {
      alert('An error occurred while sending the form.');
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
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
  );
};

export default ContactForm;
