import React from 'react';

function Header() {
  return (
    <div className="header">
        <nav class="barrenav">
          <a href="index.html">
            <img class="thelogo" src="./assets/img/logoblanc.png" alt="logo"></img>
            <ul class="nav-links">
                <li> <a href="https://www.wildcodeschool.com/fr-FR" target="blank">Our School</a></li>
                <li> <a href="./instructors.html" target="blank">Instructors</a></li>
                <li> <a href="mailto:marylou.moulon@wildcodeschool.com "><span>Contact</span></a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            </a>
        </nav>
        </div>
  );
  
  }

export default Header