import React from "react";
import "./footer-contact.css";
import { StyledLink } from "./sections";

const FooterContact = () => (
  <div className="footer-contact-section">
    <div className="text-contact-info">
      <h1>Hours</h1>
      <p>Mon - Thu</p>
      <p>7:30 am - 10:00 pm</p>
      <p>Fri - Sun</p>
      <p>7:00 am - 10:00 pm</p>
    </div>
    <div className="text-contact-info">
      <h1>Visit Us</h1>
      <p>
        <StyledLink
          href="https://maps.app.goo.gl/PXH87qQesxWAWqbKA"
          target="_blank"
          rel="noreferrer"
        >
          5575 S Semoran Blvd<br></br>Suite 46<br></br>Orlando, FL 32822
        </StyledLink>
      </p>
      <p>Behind the Library on Hoffner Avenue.</p>
      <p>
        Enter “Advance Coin Laundry” into Waze or Google Maps to search for our
        location
      </p>
    </div>
    <div className="text-contact-info">
      <h1>Contact Us</h1>
      <p>
        <StyledLink href="tel:+14072379531">(407) 237-9531</StyledLink>
      </p>
      <p>
        <StyledLink href="mailto:advancecoin47@gmail.com">
          advancecoin47@gmail.com
        </StyledLink>
      </p>
    </div>
  </div>
);

export default FooterContact;
