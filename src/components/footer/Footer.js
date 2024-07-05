import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Саволингиз борми? Қўнғироқ қилинг</h4>
            <h2>+998 71 209 99 44</h2>
            <ul className="footer-container-bottom-contact-list">
                <li className="footer-container-bottom-contact-item">
                    <FaInstagram />
                </li>

                <li className="footer-container-bottom-contact-item">
                    <FaTelegram />
                </li>

                <li className="footer-container-bottom-contact-item">
                    <FaYoutube />
                </li>

                <li className="footer-container-bottom-contact-item">
                    <FaFacebookF />
                </li>
              </ul>
              <br />
              <ul className="footer-container-social-list">
              <li className="footer-container-social-item">
                  <FaApple />
                <span>AppStore</span>
              </li>

              <li className="footer-container-social-item">
                  <FaGooglePlay />
                <span>Google play</span>
              </li>
            </ul>
            <br />
            <a href="/" className='a__teg'>Дўконлар манзиллари Тошкент</a>

              



          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Компания</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <h6>Юридик шахслар учун</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>Биз ҳақимизда</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>Биз ҳақимизда</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>IMEI ни текшириш</h6>
              </li>
              <br />
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Компания</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <h6>Маълумот</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>Бепул етказиб бериш</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>Бонус тизими</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>Техномартда ишлаш</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>Шахсий кабинет</h6>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Компания</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <h6>Ҳаридорга ёрдам</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>Махсулотни қайтариш</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>Маҳсулотлар учун кафолат</h6>
              </li>
              <br />
              <li className="footer-container-list">
                  <h6>Кўп сўраладиган саволлар</h6>
              </li>
            </ul>
            <br />
            <br />
            <div className="helloo">
                    <i><FaTelegram /></i> <span>Бонусингизни билиб олинг</span>
            </div>
          </div>
            
          </div>
        </div>
<div className="hr"></div>
      </div>
  );
}

export default Footer;
