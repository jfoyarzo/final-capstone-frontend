import React from 'react';
import {
  FaTwitter, FaFacebookF, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

const SideBar = () => (
  <section className="side-bar">
    <ul className="menu">
      <li>Investigators</li>
      <li>Lifestyle</li>
      <li>Shop</li>
      <li>Test</li>
    </ul>

    <ul className="social-icons">
      <li><a href="https://www.twitter.com" aria-label="Twitter"><FaTwitter /></a></li>
      <li><a href="https://www.facebook.com" aria-label="Facebook"><FaFacebookF /></a></li>
      <li><a href="https://www.instagram.com" aria-label="Instagram"><TiSocialInstagram /></a></li>
      <li><a href="https://www.vimeo.com" aria-label="Vimeo"><FaVimeoV /></a></li>
      <li><a href="https://www.pinterest.com" aria-label="Pinterest"><FaPinterestP /></a></li>
    </ul>
    <footer>
      <p>
        &copy; 2023 Mátyás Gombos, Waris Haleem, Chris Clothier,
        Felipe Oyarzo and Emmanuel Orji-Ihuoma
      </p>
    </footer>
  </section>
);

export default SideBar;
