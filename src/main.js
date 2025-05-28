import React from "react";
// import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import Booking from "./booking";
// import Confirmation from "./confirmation";
import Header from "./header";
// import gs from "./greeksalad.jpg"
function Main () {
    return (
      <>
      {/* <Header /> */}
        <main>
          <section className="specials">
            <div className="specials-flex-container">
              <div className="specials-header">
                <h2 className="sp">Specials</h2>
              </div>
              <div>
                <button className="specials-btn">Online Menu</button>
              </div>
            </div>
          </section>
          <section className="highlights">
            <div className="highlights-container">
              <div className="highlight-box">
                <img src="greeksalad.jpg" alt="Greek Salad" className="highlight-img" />
                  <div className="highlight-content">
                    <div className="highlight-header">
                      <h4>Greek Salad</h4>
                      <h4 className="price">$12.99</h4>
                    </div>
                      <p className="des">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                      <h4 className="des">Order a Delivery 🛴</h4>
                    </div>
                  </div>
                  <div className="highlight-box">
                    <img src="bruschetta.jpg" alt="Bruschetta" className="highlight-img" />
                      <div className="highlight-content">
                        <div className="highlight-header">
                          <h4>Bruschetta</h4>
                          <h4 className="price">$5.99</h4>
                        </div>
                          <p className="des">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                          <h4 className="des">Order a Delivery 🛴</h4>
                      </div>
                  </div>
                  <div className="highlight-box">
                    <img src="lemondessert.jpg" alt="Lemon Dessert" className="highlight-img" />
                      <div className="highlight-content">
                        <div className="highlight-header">
                          <h4>Lemon Dessert</h4>
                            <h4 className="price">$5.00</h4>
                        </div>
                        <p className="des">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <h4 className="des">Order a Delivery 🛴</h4>
                      </div>
                  </div>
            </div>
          </section>
        </main>
        </>
      );
}

export default Main;

