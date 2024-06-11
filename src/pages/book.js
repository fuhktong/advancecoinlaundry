import React from 'react';
import '../sections.css';
import { DividerWhite } from '../sections';
import { Helmet } from 'react-helmet-async';

const Book = () => (
  <section className="sectiontemplate" style={{ backgroundColor: 'white' }}>
    <Helmet>
      <title>The Framers' Method - Book</title>
      <meta name="description" content="Buy the book! The American republic is under threat from populism and tyrannical-minded politicians. The Framers’ Method can restore political stability to government and the American people." />
      <meta name="keywords" content="electoral college, presidential elections, american politics, electors, electoral votes, president, constitution, amazon" />
      <meta name="author" content="Dustin Taylor" />
      <meta name="robots" content="index, follow"></meta>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
      <meta name="language" content="English"></meta>
      <meta property="og:title" content="The Framers' Method - Book" />
      <meta property="og:description" content="Buy the book! The American republic is under threat from populism and tyrannical-minded politicians. The Framers’ Method can restore political stability to government and the American people." />
      <meta property="og:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
      <meta property="og:url" content="https://www.framersmethod.com/book" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="The Framers' Method - Book" />
      <meta name="twitter:description" content="Buy the book! The American republic is under threat from populism and tyrannical-minded politicians. The Framers’ Method can restore political stability to government and the American people." />
      <meta name="twitter:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <div className="sectiontemplate-text">
      <div className="sectiontemplate-text-h2" style={{fontSize: 50, fontStyle: 'italic'}}>On the Framers' Method</div>
      <div className="sectiontemplate-text-h1">How the Electoral College and the Hamilton Method Can Defeat Populism and Tyranny </div>
      <div className="sectiontemplate-text-p">Whatever you think about the Electoral College, it is not of the framers’ design. Diving deep into the realm of political science, the reader will discover what the framers actually created, how truly different the framers’ Electoral College is from our modern incarnation, and reforms that will bring us back to the framers’ original concept of choosing a president.<br />
      Using original analysis and data, The Framers’ Method describes how the delegates to the constitutional convention built a system of decentralization and deliberation to elect a president. By dispersing power to electors throughout the several states to nominate candidates, “designing men” would be unable to influence and control the masses. By returning to the framers’ method, we can save the United States from the destructiveness of populism and tyranny.
      </div>
      <DividerWhite/>
      <a className="amazonlink" href="https://a.co/d/2kLold3" target="_blank" rel="noreferrer">Purchase here on Amazon</a>
    </div>
    <div class="sectiontemplate-img">
      <img src="./book image three dee copy.png" alt="On the Framers' Method: How the Electoral College and the Hamilton Method Can Defeat Populism and Tyranny" />
    </div>
  </section>
);

export default Book;