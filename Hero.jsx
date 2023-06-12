import React from "react";
import heroImg from "./assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            praesentium quidem modi repellat, cum soluta laborum possimus fugit
            voluptatibus aliquid provident minus eligendi neque quis vel eum
            distinctio est quaerat ab quia fuga impedit dolorem! Facere ratione
            aliquam ducimus iste?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
