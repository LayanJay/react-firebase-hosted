import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/bac633b0-a641-11ed-a31e-753411848f80"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      className="formContainer"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="formNameEntry">
        <input
          className="formEntry formFName"
          type="text"
          placeholder="First Name"
          name="name"
          required
        />
        <input
          className="formEntry formLName"
          type="text"
          placeholder="Last Name"
          name="name"
          required
        />
      </div>
      <div>
        <input
          className="formEntry formEmail"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div>
        <textarea
          className="formEntry formMessage"
          placeholder="Your message"
          name="message"
          required
        />
      </div>
      <div>
        <button className="buttonGeneral formSubmit" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
