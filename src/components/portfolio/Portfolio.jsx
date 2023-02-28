import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Social from "../Social";

const portfolioData = [
    {
        id: 1,
        tooltipId: "product",
        portfolioImage: "img/portfolio/6.png",
        portfolioPreview: "img/portfolio/6a.png",
        // portfolioLink: "https://www.behance.net/ib-themes",
        title: "Detección temprana de la presencia incendios en los sectores que conforman una vivienda, usando técnicas de inteligencia artificial, mediante una Red Neuronal Convolucional.",
        // meta: "Product",
        // clientName: "Alvaro Morata",
        category: "Inteligencia Artificial",
        date: "Enero 25, 2021",
        projectDescriptions: (
            <>
                <p>
                    Se emplearon técnicas de inteligencia artificial para
                    diseñar un sistema que se encargue de analizar y clasificar
                    imágenes de los distintos lugares de una vivienda, de tal
                    manera que se logre detectar patrones que indiquen un
                    posible incendio; red que fue adaptada a un sistema que
                    notifica al usuario, a través de una aplicación móvil, la
                    presencia de estos incendios.
                </p>

                <p>
                    La solución consiste en la implementación de una red
                    neuronal convolucional que nos permitirá reconocer la
                    presencia de fuego en las viviendas a una determinada
                    distancia.
                </p>

                <p>
                    El modelo que se ha entrenado para posteriormente determinar
                    una salida, de acuerdo con el aprendizaje adquirido por el
                    modelo luego de ser entrenado
                </p>

                <p>El proceso general que se seguió fue:</p>
                <p>1) Recolectar imágenes de interiores de viviendas</p>
                <p>2) Preprocesar imágenes recolectadas</p>
                <p>3) Analizar patrones de las imágenes</p>
            </>
        ),
    },
    // Desarrollo web y móvil
];

const Portfolio = () => {
    var settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrow: false,
                    autoplay: false,
                    draggable: true,
                    speed: 300,
                    dots: true,
                },
            },
        ],
    };

    const [singleData, setSingleData] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const handlePortfolioData = (id) => {
        const find = portfolioData.find((item) => item?.id === id);
        setSingleData(find);
        setIsOpen(true);
    };

    const handleModle = (id) => {
        handlePortfolioData(id);
    };

    // console.log("singleData: ", singleData.clientName);

    return (
        <div className="portfolio_inner my_carousel gallery_zoom">
            <ul data-aos="fade-right" data-aos-duration="1200">
                <Slider {...settings}>
                    {portfolioData.map((item) => {
                        console.log("item: ", item);
                        return (
                            <li key={item.id}>
                                <div className="list_inner">
                                    <div className="image">
                                        <div
                                            onClick={() =>
                                                handleModle(item?.id)
                                            }
                                            className="details"
                                        >
                                            <img
                                                src={item?.portfolioPreview}
                                                data-tip
                                                data-for="product"
                                                alt="portfolio"
                                            />

                                            <ReactTooltip
                                                id={item.tooltipId}
                                                place="bottom"
                                                type="light"
                                                effect="float"
                                                className="tooltip-wrapper"
                                            >
                                                <div>
                                                    <h5>{item.category}</h5>
                                                    {/* <span>{item.meta}</span> */}
                                                </div>
                                            </ReactTooltip>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </Slider>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                >
                    <div className="edina_tm_modalbox">
                        <button
                            className="close-modal"
                            onClick={() => setIsOpen(false)}
                        >
                            <img src="/img/svg/cancel.svg" alt="close icon" />
                        </button>
                        {/* End close icon */}

                        <div className="box_inner">
                            <div className="description_wrap scrollable">
                                <div className="image">
                                    <div
                                        className="main"
                                        style={{
                                            backgroundImage: `url(${singleData?.portfolioImage})`,
                                        }}
                                    ></div>
                                </div>
                                {/* End image */}

                                <div className="portfoiol_content-inner">
                                    <div className="left-content">
                                        <h2 className="title">
                                            {" "}
                                            {singleData?.title}
                                        </h2>
                                        {singleData?.projectDescriptions}
                                    </div>
                                    <div className="right-content">
                                        <ul className="list">
                                            <li>
                                                {singleData?.clientName !==
                                                    undefined && (
                                                    <>
                                                        <h5>Client</h5>
                                                        <span>
                                                            {
                                                                singleData?.clientName
                                                            }
                                                        </span>
                                                    </>
                                                )}
                                            </li>
                                            {/* End list */}
                                            <li>
                                                <h5>Categoría</h5>
                                                <span>
                                                    {singleData?.category}
                                                </span>
                                            </li>
                                            {/* End list */}
                                            <li>
                                                <h5>Datos</h5>
                                                <span>{singleData?.date}</span>
                                            </li>
                                            {/* End list */}
                                            <li>
                                                {singleData?.portfolioLink !==
                                                    undefined && (
                                                    <>
                                                        <h5>Link</h5>
                                                        <span>
                                                            <a
                                                                href={
                                                                    singleData?.portfolioLink
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {
                                                                    singleData?.portfolioLink
                                                                }
                                                            </a>
                                                        </span>
                                                    </>
                                                )}
                                            </li>
                                            {/* End list */}
                                            {/* <li className="news_share d-blok">
                                                <h5>Share</h5>
                                                <Social />
                                            </li> */}
                                            {/* End list */}
                                        </ul>
                                    </div>
                                </div>
                                {/* End .portfoiol_content-inner */}
                            </div>
                        </div>
                        {/* End box inner */}
                    </div>
                    {/* End modal box news */}
                </Modal>
            </ul>
        </div>
    );
};

export default Portfolio;
