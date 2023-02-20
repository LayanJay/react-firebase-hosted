import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/bac633b0-a641-11ed-a31e-753411848f80"; // TODO - fill on the later step

const EmailForm = () => {
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
      </>
    );
  }

  return (
    <form
      className="emailContainer"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input
          className="emailEntry"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div>
        <button className="buttonGeneral formSubmit" type="submit">
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
