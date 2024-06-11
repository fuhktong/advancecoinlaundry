import React from 'react';
import { LogoOnly, SocialMediaBar } from '../sections';
import ContactForm from './contactform.js';
import '../sections.css';
import './contactform.css';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <section>
      <Helmet>
        <title>The Framers' Method - Contact</title>
        <meta name="description" content="Send a message to the Framers' Method. The American republic is under threat from populism and tyrannical-minded politicians. The Framers’ Method can restore political stability to government and the American people." />
        <meta name="keywords" content="electoral college, presidential elections, american politics, electors, electoral votes, president, constitution" />
        <meta name="author" content="Dustin Taylor" />
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
        <meta property="og:title" content="The Framers' Method - Contact" />
        <meta property="og:description" content="Send a message to the Framers' Method. The American republic is under threat from populism and tyrannical-minded politicians. The Framers’ Method can restore political stability to government and the American people." />
        <meta property="og:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta property="og:url" content="https://www.framersmethod.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="The Framers' Method - Contact" />
        <meta name="twitter:description" content="Send a message to the Framers' Method. The American republic is under threat from populism and tyrannical-minded politicians. The Framers’ Method can restore political stability to government and the American people." />
        <meta name="twitter:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <LogoOnly />
      <SocialMediaBar />
      <ContactForm />
    </section >
  );
};

export default Contact;