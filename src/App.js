import React from "react";
import "./Component/Pure.css";
import Slider from "./Component/Slider";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <div className="landing-page">
        <header className="header">
          <h1>Abibas Landing Page</h1>
          <p>
            Inspirational designs, illustrations, and graphic elements from the
            world’s best designers. Want more inspiration? Browse our search
            results...
          </p>
        </header>
        <main className="main-content">
          <div className="product-card">
            <img
              src="https://cdn.dribbble.com/userupload/6091242/file/original-1308c6da687916573354309f946413a0.jpg?resize=1200x901"
              alt="Shoe 1"
              className="product-image"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.dribbble.com/users/2883725/screenshots/11935354/media/a710c651e72ec4adc7ba3955219df0fd.png?resize=1000x750&vertical=center"
              alt="Shoe 2"
              className="product-image"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.dribbble.com/users/9862997/screenshots/16929740/media/622b339784d887cdb769bd65728c383b.png?resize=800x600&vertical=center"
              alt="Shoe 1"
              className="product-image"
            />
          </div>
          <div className="product-card">
            <img
              src="https://cdn.dribbble.com/users/5297288/screenshots/19538766/media/bb3a90459d0a41b85f780221fffb6cac.jpg?resize=1000x750&vertical=center"
              alt="Shoe 2"
              className="product-image"
            />
          </div>
        </main>
      </div>
      <Slider />
      <br />
      <Footer />
    </>
  );
}

export default App;


