import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Build Strength. Push Limits</h1>
        <p className="hero__description">
          Transform your body, strengthen your mind, and reach your fitness
          goals with IronPulse Fitness.
        </p>
        <a href="#register" className="hero__cta">
          Join Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
