import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import HeadData from "../components/head/head";

const Contact = () => {
  return (
    <Fragment>
      <HeadData title={"Contact Me"} description={"Send me your message."} />
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
