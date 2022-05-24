/* eslint-disable jsx-a11y/anchor-is-valid */
import HeroIllustration from '../assets/illustration.png';

function Hero() {
  return (
    <section id="hero">
      <div id="hero-container" class="container">
        <div id="hero-left">
          <h1>Discover the world's top designers & creatives</h1>
          <p>Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>
          <a href="#" className="btn sign-up">Sign up</a>
        </div>
        <div id="hero-right">
          <img src={HeroIllustration} alt="pic" />
          <p>Learn more about how we’re supporting Ukraine. Art by Merge Development</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
