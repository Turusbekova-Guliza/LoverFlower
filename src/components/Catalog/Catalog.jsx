import React from 'react'
import "./Catalog.css"
const Catalog = () => {
  return (
    <div>
         <div className="content__wrapper">  
            <section className="section__catalog-section">
    <div className="container">
        <h2 className="title__catalog catalog-section__title">каталог</h2>
        <div className="catalog-section">
            <div className="catalog-section__bg-text_flowers">
                Цветы
            </div>
            <div className="catalog-section__bg-text_add">
                Дополнительно
            </div>
            <div className="catalog-section__bg-text_bouquets">
                Букеты
            </div>
            <div className="catalog-section__item catalog-section__item_whithout-bg catalog-section__item_text-wide">
                <div className="catalog-section__item-text">
                    У нас самый большой выбор цветов, букетов, открыток и подарков. Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет определиться с выбором
                    <span>Ознакомьтесь с нашими разделами каталога</span>
                </div>
            </div>
            <div className="catalog-section__item catalog-section__item_small">
                <div className="title_item catalog-section__item-title">готовые букеты из сухоцветов</div>
                <ul className="catalog-section__item-list">
                    <li className="catalog-section__item-item">букеты</li>
                    <li className="catalog-section__item-item">для интерьера</li>
                    <li className="catalog-section__item-item">Композиции</li>
                </ul>
                <a href="../catalog.html" className="catalog-section__item-link">смотреть каталог</a>
            </div>
            <div className="catalog-section__item catalog-section__item_small">
                <div className="title_item catalog-section__item-title">Цветы</div>
                <ul className="catalog-section__item-list">
                    <li className="catalog-section__item-item">Сборные букеты</li>
                    <li className="catalog-section__item-item">Монобукеты</li>
                    <li className="catalog-section__item-item">Композиции из цветов</li>
                    <li className="catalog-section__item-item">розы</li>
                    <li className="catalog-section__item-item">свадебные</li>
                </ul>
                <a href="../catalog.html" className="catalog-section__item-link">смотреть каталог</a>
            </div>
            <div className="catalog-section__item catalog-section__item_wide">
                <div className="title_item catalog-section__item-title">дополнительно</div>
                <ul className="catalog-section__item-list">
                    <li className="catalog-section__item-item">шары</li>
                    <li className="catalog-section__item-item">игрушки</li>
                    <li className="catalog-section__item-item">открытки</li>
                    <li className="catalog-section__item-item">упаковка</li>
                </ul>
                <a href="../catalog.html" className="catalog-section__item-link">смотреть каталог</a>
            </div>
        </div>
    </div>
</section>        
        </div>
    </div>
  )
}

export default Catalog