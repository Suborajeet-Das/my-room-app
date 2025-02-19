const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
      <h1>Find the <span className="bold">Ideal </span> 
          <span className="highlight">PG</span> or<br />
          <span className="highlight">Rental</span> That 
          <span className="bold"> Fits</span> Your <span className="highlight">Lifestyle</span>
      </h1>
      <p>Discover trusted PGs and rentals, read authentic reviews, and make informed decisions effortlessly</p>
      <button className="primary-btn"><a>Let`s get started</a></button>
      </div>
      <div className="hero-right">
      <img src="/src/assets/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
