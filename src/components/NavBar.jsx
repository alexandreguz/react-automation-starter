import React, { useState } from 'react';
import '../App.css'

const NavBar = ({ categories, onSelectCategory, onViewFileViewer }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo"><a href="#">Logo</a></div>
          <input type="radio" name="slider" id="menu-btn"/>
          <input type="radio" name="slider" id="close-btn"/>
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li>
              <a href="#" className="desktop-item">Tests Categories</a>
              <input type="checkbox" id="showDrop"/>
              <label htmlFor="showDrop" className="mobile-item">Dropdown Menu</label>
              <ul className="drop-menu">
                {categories.map((category, index) => (
                  <li key={index} onClick={() => onSelectCategory(category)}>
                    {category}
                  </li>
                ))}
              </ul>
            </li>
            <li onClick={onViewFileViewer}>
              <a href="#" className="desktop-item">File Viewer</a>
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
          <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
