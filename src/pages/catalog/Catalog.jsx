import React from 'react'
import "./CatalogPage.css"
import Lover2Catalog from "../../assets/catalog-img2.png"
import LoverCatalog from "../../assets/catalog-img.png"
import Instagram from "../../assets/HeroImgINS.svg"
import Whatsapp from "../../assets/Wothsap.svg"
import PhoneIson from "../../assets/PhoneIcon.svg"
import Card from "../../assets/Card.svg"
import ImgCardLover from "../../assets/LoverCard.svg"
import ScrollIcon from "../../assets/ScrollIcon.svg"

const categories = [
    {
        name: "Букеты из гипсофил"
    },
    {
        name: "Букеты из ромашек"
    },
    {
        name: "Букеты из хризантем"
    },
    {
        name: "Комнатные цветы в горшках"
    },
    {
        name: "Монобукеты"
    }, 
    {
        name: "Сборные букеты"   
    },
    {
        name: "Сборные букеты"
    },
    {
        name: "Композиции из цветов"
    },
    {
        name: "Конверты"
    },
    {
        name: "Открытки"
    },
    {
        name: "Подарки"
    },
    {
        name: "Букеты из сухоцветов"
    },
    {
        name: "Шары"
    },
    {
        name: "Популярное"
    },
    {
        name: "Букеты роз"
    },
    {
        name: "Цветы на похороны"
    },
    {
        name: "Упаковка подарков"
    }
]

const CatalogPage = () => {
    return (
        <div>
            <div className="content__wrapper">
                <section className="section__home section__home_catalog">
                    <div className='flex__catalog container'>
                        <div className="catalog__left">
                            <div className="home home_catalog">
                                <div className="home__img home__img_catalog">
                                    <img src={LoverCatalog} alt="Flower" />
                                </div>
                                <div className="breadcrumbs__links">
                                    <a href="./index.html" className="breadcrumbs__link">Главная</a>
                                    <span>/</span>
                                    <a href="#" className="breadcrumbs__link breadcrumbs__link_active">Каталог</a>
                                </div>
                                <div className='catalog__logo__text'>
                                    <h2 className="title__catalog home__title-top">
                                        Каталог
                                    </h2>
                                    <h2 className="title__catalog home__title-bottom">
                                        Букетов
                                    </h2>
                                    <div className="home__content home__content_catalog">
                                        <div className="subtitle_big text__catalog__cetgory subtitle_center">В нашем магазине самый большой выбор букетов для любых событий :</div>

                                    </div>
                                </div>
                            </div>
                            <div className="catalog__button-wrapper">
                                <div className="catalog__buttons">
                                    {categories.map((el) => (
                                    <div className="catalog__button">{el.name}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='right__catalog'>
                            <div className="home-main__adress">
                                ул. Тимирязева 67
                                <span>10:00 до 21:00 без выходных</span>
                            </div>
                            <div className="home-main__socials">
                                <div className="home-main__socials-links">
                                    <a href="#">
                                        <img src={Instagram} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={Whatsapp} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={PhoneIson} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div>

                                <a href="tel:+375291136969" className="home-main__contacts-phone">+375 (29) 113-69-69</a>
                                <div className="home-main__contacts-call modal__btn" data-modal>заказать звонок</div>
                                <div className="menu__handlbag">
                                    <img src={Card} alt="" />
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <main>
                    <div className="section__catalog">
                        <div className="container">
                            <div className="catalog">
                                <div className="catalog__content">
                                    <div className="catalog__filter-wrapper">
                                        <div className="catalog__filter">
                                            <div className="catalog__filter-inner">
                                                <div className="filter__item">
                                                    <div className="filter__item-title">По свету</div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="gentle" name="gentle" value="нежные" />
                                                            <span>нежные</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="bright" name="bright" value="яркие" />
                                                            <span>яркие</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="filter__item">
                                                    <div className="filter__item-title">По цвету</div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="white" name="white" value="белые" />
                                                            <span>белые</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="yellow" name="yellow" value="жёлтые" />
                                                            <span>жёлтые</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="green" name="green" value="зелёные" />
                                                            <span>зелёные</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="red" name="red" value="красные" />
                                                            <span>красные</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="orange" name="orange" value="оранжевые" />
                                                            <span>оранжевые</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="pink" name="pink" value="розовые" />
                                                            <span>розовые</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="blue" name="blue" value="синие" />
                                                            <span>синие</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="filter__item">
                                                    <div className="filter__item-title">По формату</div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="bouquet" name="bouquet" value="букет" />
                                                            <span>букет</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="in-vase" name="in-vase" value="в вазе" />
                                                            <span>в вазе</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="in-envelope" name="in-envelope" value="в конверте" />
                                                            <span>в конверте</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="in-basket" name="in-basket" value="в карзине" />
                                                            <span>в карзине</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="in-case" name="in-case" value="в ящике" />
                                                            <span>в ящике</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="filter__item">
                                                    <div className="filter__item-title">По цветку</div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="alstroemeria" name="alstroemeria" value="Альстромерия (2)" />
                                                            <span>Альстромерия (2)</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="anthurium" name="anthurium" value="Антуриум (1)" />
                                                            <span>Антуриум (1)</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="asparagus" name="asparagus" value="Аспарагус (1)" />
                                                            <span>Аспарагус (1)</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="astilba" name="astilba" value="Астильба (7)" />
                                                            <span>Астильба (7)</span>
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" id="astrantia" name="astrantia" value="Астранция (1)" />
                                                            <span>Астранция (1)</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn__filter">Сбросить фильтр</a>
                                        </div>
                                    </div>
                                    <div className="catalog__cards">
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">лучший день</div>
                                            <div className="cards__item-price">167.000 ₽</div>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <div className="circle-new">new</div>
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">золотая осень</div>
                                            <div className="cards__item-price">192.000 ₽</div>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <div className="circle-sale">sale</div>
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">летнее утро</div>
                                            <div className="cards__item-price">187.000 ₽</div>
                                            <del className="old-price">199.000 ₽</del>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">солнечный день</div>
                                            <div className="cards__item-price">139.000 ₽</div>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <div className="circle-sale">sale</div>
                                                <img src={ ImgCardLover}alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">хорошее настроение</div>
                                            <div className="cards__item-price">208.000 ₽</div>
                                            <del className="old-price">216.000 ₽</del>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <div className="circle-new">new</div>
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">прогулка в лесу</div>
                                            <div className="cards__item-price">212.000 ₽</div>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">ночная луна</div>
                                            <div className="cards__item-price">196.000 ₽</div>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">весёлые краски</div>
                                            <div className="cards__item-price">156.000 ₽</div>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <div className="circle-sale">sale</div>
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">лучший подарок</div>
                                            <div className="cards__item-price">166.000 ₽</div>
                                            <del className="old-price">176.000 ₽</del>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">утро на лугу</div>
                                            <div className="cards__item-price">180.000 ₽</div>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">лучший день</div>
                                            <div className="cards__item-price">149.000 ₽</div>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                        <div className="cards__item">
                                            <div className="cards__item-img">
                                                <div className="circle-sale">sale</div>
                                                <img src={ImgCardLover} alt="flowers" />
                                            </div>
                                            <div className="cards__item-title">прогулка в лесу</div>
                                            <div className="cards__item-price">177.000 ₽</div>
                                            <del className="old-price">185.000 ₽</del>
                                            <a href="#" className="btn btn_big cards__item-btn">В корзину</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                <div className="catalog__img">
                                    <img src={Lover2Catalog} alt="" />
                                </div>
                        <a href="#" className="arrow-up">
                            <img src={ScrollIcon} alt="" />
                            
                        </a>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default CatalogPage