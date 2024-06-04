import React from 'react';
import '../sections.css';
import { DividerWhite } from '../sections';

const Book = () => (
  <section className="sectiontemplate" style={{ backgroundColor: 'white' }}>
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