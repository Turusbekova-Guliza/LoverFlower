import React, { useState } from 'react';
import Search from "../../assets/Search.svg"
import LogoImg from "../../assets/Logo.svg"
import CardIcon from "../../assets/Card.svg"
import PhoneIcon from "../../assets/PhoneIcon.svg"
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    const [showLoverFlower, setShowLoverFlower] = useState(false);

    const handleCatalogClick = () => {
        setShowLoverFlower(true);
    }

    const handleOtherLinkClick = () => {
        setShowLoverFlower(false);
    }

    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="header_wrapper">
                        <div className='Logo'>
                            <Link to="/">
                                <img onClick={handleCatalogClick} src={LogoImg} alt="" />
                            </Link>
                        </div>
                        <div className='navigation_header'>
                            <div>
                                <Link style={{ textDecoration: "none" }} to="/katalog">
                                    <h1 onClick={handleCatalogClick} className='text_navigation'>
                                        КАТАЛОГ
                                    </h1>
                                </Link>
                            </div>
                            <div onClick={handleOtherLinkClick}>
                                <Link style={{ textDecoration: "none" }} to="/delPay">
                                    <h1 className='text_navigation'>
                                        ДОСТОВКА И ОПЛАТА
                                    </h1>
                                </Link>
                            </div>
                            <div onClick={handleOtherLinkClick}>
                                <Link style={{ textDecoration: "none" }} to="/about">
                                    <h1 className='text_navigation'>
                                        О НАС
                                    </h1>
                                </Link>
                            </div>
                            <div>
                                <Link style={{ textDecoration: "none" }} to="/contact">
                                    <h1 className='text_navigation'>
                                        КОНТАКТЫ
                                    </h1>
                                </Link>
                            </div>
                            <div>
                                <Link style={{ textDecoration: "none" }} to="/faq">
                                    <h1 className='text_navigation'>
                                        FAQ
                                    </h1>
                                </Link>
                            </div>
                        <div className="Search" style={{ background: "black" }}>
                            <img src={Search} alt="" />
                            <input style={{ width: showLoverFlower ? "180px" : "223px" }} className='search' type="search" placeholder='ПОИСК' />
                        </div>
                        </div>
                        <div className="lover_flower_gmail" style={{ display: showLoverFlower ? "block" : "none" }}>
                            <h1>zakaz@loverflower.by</h1>
                            <p>Доставка 24/7 по договоренности с оператором</p>
                        </div>
                        <div className='card' style={{ display: showLoverFlower ? "none" : "block" }}>
                            <div className='card__small'>
                                <div className='phone'>
                                    <img src={PhoneIcon} alt="" />
                                    <p>+375 (29) 113-69-69</p>
                                </div>
                                <div className='card__total'>
                                    <span>1</span>
                                <img src={CardIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
