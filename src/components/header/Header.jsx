import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Search from "../../assets/Search.svg";
import LogoImg from "../../assets/Logo.svg";
import CardIcon from "../../assets/Card.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
import "./Header.css";

const Header = () => {
  const [showLoverFlower, setShowLoverFlower] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const isHomePage = location.pathname === "/";
    const isCatalogPage = location.pathname === "/catalogPage";

    if ((isHomePage || isCatalogPage) && prevScrollPos > 0) {
      setShowLoverFlower(true);
    } else {
      setShowLoverFlower(false);
    }
  }, [location, prevScrollPos]);

  const handleCatalogClick = () => {
    setShowLoverFlower(true);
  };

  const handleOtherLinkClick = () => {
    setShowLoverFlower(false);
  };

  const handlePageChange = () => {
    setShowLoverFlower(false);
  };

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`} style={{ background: showLoverFlower ? "black" : "transparent" }}>
      <div className="container">
        <div className="header_wrapper">
          <div className="Logo">
            <Link to="/" onClick={handleOtherLinkClick}>
              <img src={LogoImg} alt="" />
            </Link>
          </div>
          <div className="navigation_header">
            <div>
              <Link to="/catalogPage" style={{ textDecoration: "none" }} onClick={handleOtherLinkClick}>
                <h1 className="text_navigation">КАТАЛОГ</h1>
              </Link>
            </div>
            <div onClick={handleCatalogClick}>
              <Link to="/delPay" style={{ textDecoration: "none" }} onClick={handlePageChange}>
                <h1 className="text_navigation">ДОСТОВКА И ОПЛАТА</h1>
              </Link>
            </div>
            <div onClick={handleCatalogClick}>
              <Link to="/about" style={{ textDecoration: "none" }} onClick={handlePageChange}>
                <h1 className="text_navigation">О НАС</h1>
              </Link>
            </div>
            <div onClick={handleCatalogClick}>
              <Link to="/contact" style={{ textDecoration: "none" }} onClick={handlePageChange}>
                <h1 className="text_navigation">КОНТАКТЫ</h1>
              </Link>
            </div>
            <div onClick={handleCatalogClick}>
              <Link to="/faq" style={{ textDecoration: "none" }} onClick={handlePageChange}>
                <h1 className="text_navigation">FAQ</h1>
              </Link>
            </div>
            <div className="Search" style={{ background: "transparent" }}>
              <img src={Search} alt="" />
              <input
                className="search"
                type="search"
                placeholder="ПОИСК"
                style={{ width: showLoverFlower ? "223px" : "180px" }}
              />
            </div>
          </div>
          <div className="lover_flower_gmail" style={{ display: showLoverFlower ? "none" : "block" }}>
            <h1>zakaz@loverflower.by</h1>
            <p>Доставка 24/7 по договоренности с оператором</p>
          </div>
          <div className="card" style={{ display: showLoverFlower ? "block" : "none" }}>
            <div className="card__small">
              <div className="phone">
                <img src={PhoneIcon} alt="" />
                <p>+375 (29) 113-69-69</p>
              </div>
              <div className="card__total">
                <span>1</span>
                <img src={CardIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
