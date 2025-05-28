import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
    return (
      <header className="hero">
        <section>
          <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Our restaurant provides various cuisines prepared by our well trained and experienced chef’s team. We invite you to join us and enjoy your meal. We also provide takeaway facility as well as home delivery!!</p>
            <button className="hero-btn" onClick={ () => navigate('/booking')}>Reserve a Table</button>
          </div>
          <div>
            <img src= 'restauranfood.jpg' />
          </div>
        </section>
      </header>
    );
  }

  export default Header;


