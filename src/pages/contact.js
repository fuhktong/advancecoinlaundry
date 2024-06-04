import React from 'react';
import { DividerWhite, LogoOnly, SocialMediaBar } from '../sections';
import ContactForm from './contactform.js';
import '../sections.css';
import './contactform.css';

const Contact = () => {
  return (
    <section>
      <LogoOnly />
      <SocialMediaBar />
      <ContactForm />
      <DividerWhite />
    </section >
  );
};

export default Contact;