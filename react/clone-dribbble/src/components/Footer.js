/* eslint-disable jsx-a11y/anchor-is-valid */

import DribbbleLogo from '../assets/dribbble-logo.svg';
import DribbbleBallIcon from '../assets/dribbble-ball-icon.svg';

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="upper-content">
          <div id="company-info">
            <img src={DribbbleLogo} alt="logo" />
            <p>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
          </div>
          <ul>
            <li><strong>For designers</strong></li>
            <li><a href="#">Go Pro!</a></li>
            <li><a href="#">Explore design work</a></li>
            <li><a href="#">Design blog</a></li>
            <li><a href="#">Overtime podcast</a></li>
            <li><a href="#">Dribbble meetups</a></li>
            <li><a href="#">Playoffs</a></li>
            <li><a href="#">Weekly Warm-Up</a></li>
          </ul>
          <ul>
            <li><strong>Hire designers</strong></li>
            <li><a href="#">Post a job opening</a></li>
            <li><a href="#">Post a freelance project</a></li>
            <li><a href="#">Search for designers</a></li>
          </ul>
        </div>
        <div class="lower-content">
          <span>&#169; 2022 Dribbble. All rights reserved.</span>
          <span class="lower-content-right">
            <strong>18,092,697</strong>
            shots dribbbled
            <img src={DribbbleBallIcon} alt="dribbble" />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
