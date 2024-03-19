// components/NavBar.jsx
// import React from 'react';

// function NavBar({ categories, onSelectCategory }) {
//   return (
//     <nav>
//       <ul>
//         {categories.map((category, index) => (
//           <li key={index} onClick={() => onSelectCategory(category)}>
//             {category}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

import React, { useState } from 'react';
import '../App.css'

const NavBar = ({ categories, onSelectCategory }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

return (
<>
  <nav>
  <div class="wrapper">
    <div class="logo"><a href="#">Logo</a></div>
    <input type="radio" name="slider" id="menu-btn"/>
    <input type="radio" name="slider" id="close-btn"/>
    <ul class="nav-links">
      <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
      {/* <li><a href="#">Home</a></li>
      <li><a href="#">Automation</a></li> */}
      <li>
        <a href="#" class="desktop-item">Tests Categories</a>
        <input type="checkbox" id="showDrop"/>
        <label for="showDrop" class="mobile-item">Dropdown Menu</label>
        <ul class="drop-menu">
            {categories.map((category, index) => (
              <li key={index} onClick={() => onSelectCategory(category)}>
                {category}
              </li>
            ))}
        </ul>
      </li>
      {/* <li>
        <a href="#" class="desktop-item">Mega Menu</a>
        <input type="checkbox" id="showMega"/>
        <label for="showMega" class="mobile-item">Mega Menu</label>
        <div class="mega-box">
          <div class="content">
            <div class="row">
              <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg" alt=""/>
            </div>
            <div class="row">
              <header>Design Services</header>
              <ul class="mega-links">
                <li><a href="#">Graphics</a></li>
                <li><a href="#">Vectors</a></li>
                <li><a href="#">Business cards</a></li>
                <li><a href="#">Custom logo</a></li>
              </ul>
            </div>
            <div class="row">
              <header>Email Services</header>
              <ul class="mega-links">
                <li><a href="#">Personal Email</a></li>
                <li><a href="#">Business Email</a></li>
                <li><a href="#">Mobile Email</a></li>
                <li><a href="#">Web Marketing</a></li>
              </ul>
            </div>
            <div class="row">
              <header>Security services</header>
              <ul class="mega-links">
                <li><a href="#">Site Seal</a></li>
                <li><a href="#">VPS Hosting</a></li>
                <li><a href="#">Privacy Seal</a></li>
                <li><a href="#">Website design</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li><a href="#">Feedback</a></li> */}
    </ul>
    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
  </div>
</nav>
</>
);
};

export default NavBar;
