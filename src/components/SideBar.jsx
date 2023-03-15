import React from 'react';
import {
  FaTwitter, FaFacebookF, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';

const SideBar = () => (
  <section className="side-bar">
    <ul className="menu">
      <li>Investigators</li>
      <li>Lifestyle</li>
      <li>Shop</li>
      <li>Test</li>
    </ul>

    <ul className="social-icons">
      <li><FaTwitter /></li>
      <li><FaFacebookF /></li>
      <li><TiSocialGooglePlus /></li>
      <li><FaVimeoV /></li>
      <li><FaPinterestP /></li>
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
