/* eslint-disable jsx-a11y/anchor-is-valid */
import DribbbleLogo from '../assets/dribbble-logo.svg';

function Navbar() {
  return (
    <nav>
      <div id="nav-left">
        <a href="#"><img id="logo" src={DribbbleLogo} alt="logo" /></a>
        <ul id="nav-items">
          <li><a href="#" className="nav-item">Inspiration</a></li>
          <li><a href="#" className="nav-item">Find Work</a></li>
          <li><a href="#" className="nav-item">Learn Design</a></li>
          <li><a href="#" className="nav-item">Go Pro</a></li>
          <li><a href="#" className="nav-item">Marketplace</a></li>
          <li><a href="#" className="nav-item">Hire Designers</a></li>
        </ul>
      </div>
      <div id="nav-right">
        <a href="#" className="search">&#x1F50E;&#xFE0E;</a>
        <a href="#" className="sign-in">Sign in</a>
        <a href="#" className="btn sign-up">Sign up</a>
      </div>
    </nav>
  );
}

export default Navbar;
