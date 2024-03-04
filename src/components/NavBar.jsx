// components/NavBar.jsx
import React from 'react';

function NavBar({ categories, onSelectCategory }) {
  return (
    <nav>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
