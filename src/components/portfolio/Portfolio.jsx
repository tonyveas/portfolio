import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Social from "../Social";
// Modal.setAppElement("#__next");

const portfolioData = [
    {
        id: 5,
        tooltipId: "pj5",
        portfolioImage: "img/portfolio/11.png",
        // portfolioLink: "https://themeforest.net/user/ib-themes",
        portfolioPreview: "img/portfolio/11a.png",
        title: "Desarrollador de Software (Clear Minds Consultores S.A) - Módulo Teller COBIS CORP - BANISTMO",
        meta: "Software developer",
        clientName: "COBIS CORP - BANISTMO",
        category: "Desarrollador de software",
        date: "Enero - Noviembre, 2022",
        projectDescriptions: (
            <>
                <p>
                    **Nota: Las imágenes han sido censuradas por
                    confidencialidad
                </p>

                <p>
                    • Uso de COBIS DESIGNER: Software Core Bancario (Cobis Corp
                    - Cobis Topaz), para el desarrollo de transacciones
                    bancarias.
                </p>
                <p>
                    De manera resumida se trabajó en el desarrollo de
                    transacciones de pagos de convenios, formulario de lavado,
                    corrección de bugs en otras transacciones como depósitos en
                    cuentas, cheques certificas, recaudación de convenios, etc
                </p>
                <p>
                    • Metodología ágil SCRUM: Entregas continuas de software y
                    ceremonias ágiles (Sprint Planning, Spring daily, Sprint
                    Retrospective y Sprint Review). • Desarrollo de front-end
                    sobre la base de un requerimiento funcional (Java, Maven,
                    Javascript, y typescript).
                </p>
                <p>
                    • Desarrollo de back-end usando lógica de Stored Procedures.
                </p>
                <p>• Manejo de base de datos (SQL, MySQL).</p>
                <p>
                    • Ejecución de pruebas unitarias de frontend y backend para
                    los desarrollos realizados (Junit y Mockito).
                </p>
                <p>• Análisis y corrección de la calidad de código (Sonar).</p>
                <p>
                    • Uso de herramientas de control de versiones (Git -
                    TortoiseGit), siguiendo el modelo de flujos de ramas y
                    aprobaciones de Gitflow Workflow (develop, quality, máster,
                    staging).
                </p>
                <p>
                    • Uso de AWS para la gestión de los logs del sistema.
                    Detección y corrección de errores.
                </p>
            </>
        ),
    },
    {
        id: 3,
        tooltipId: "pj3",
        portfolioImage: "img/portfolio/8.png",
        portfolioLink: "https://www.youtube.com/watch?v=ApuGgkFyxgY",
        portfolioPreview: "img/portfolio/8a.png",
        title: "Aplicación móvil para la gestión de inventarios de equipos informáticos.",
        meta: "Mobile Development",
        // clientName: "Alvaro Morata",
        category: "Desarrollo móvil",
        date: "Agosto 27, 2020",
        projectDescriptions: (
            <>
                <p>
                    Se diseñó y desarrolló una aplicación móvil para el
                    departamento de sistemas del Hospital León Becerra, ya que
                    en esta institutión se venía manejando el control y
                    registros de los equipos informáticos y sus mantenimientos
                    en simples hojas y a manos, con lo cual requerían una mejora
                    en este proceso de la empresa.
                </p>

                <p>
                    Entre las funciones que poseía la aplicación móvil tenemos:
                    Gestión de inventario de equipos infomáticos, gestión de
                    fechas de mantenimientos, notificaciones de mantenimientos,
                    firma eletrónica, etc.
                </p>
            </>
        ),
    },
    {
        id: 2,
        tooltipId: "pj2",
        portfolioImage: "img/portfolio/7.png",
        portfolioLink:
            "http://idear.espol.edu.ec/sites/default/files/posters/edicion_x/P%C3%93STER_COMPUTACI%C3%93N_Desarrollo%20de%20una%20soluci%C3%B3n%20multiplataforma%20para%20el%20seguimiento%20del%20estado%20de%20salud%20de%20pacientes%20con%20atenci%C3%B3n%20domiciliaria_Sesme%20Carlos_Veas%20Tony.pdf",
        portfolioPreview: "img/portfolio/7ap.png",
        title: "Desarrollo de una solución multiplataforma para el seguimiento del estado de salud de pacientes con atención domiciliaria.",
        meta: "Web and Mobile Development",
        // clientName: "Alvaro Morata",
        category: "Desarrollo web y móvil",
        date: "Septiembre 11, 2021",
        projectDescriptions: (
            <>
                <p>
                    Se diseñó y desarrolló una aplicación web y móvil de fácil
                    uso, que permita gestionar el seguimiento remoto del estado
                    de salud de pacientes que se encuentran siendo atendidos
                    desde casa.
                </p>

                <p>
                    Entre los resultados más relevantes tenemos: ▪ La solución
                    propuesta es muy rentable ya que los tiempos se manejan
                    dentro del estándar frente a otros aplicativo que posee
                    ciertas funcionalidades en común. • El perfil paciente y
                    cuidador destaca frente a plataformas donde la información
                    del estado de salud de los pacientes puede ser visualizada y
                    gestionada exclusivamente por el médico.
                </p>
            </>
        ),
    },
    {
        id: 1,
        tooltipId: "pj1",
        portfolioImage: "img/portfolio/6.png",
        portfolioLink:
            "https://drive.google.com/file/d/104BKsFVF4welnYI6ZZgtXb1uypDCkMjW/view?usp=share_link",
        portfolioPreview: "img/portfolio/6a.png",
        title: "Detección temprana de la presencia incendios en los sectores que conforman una vivienda, usando técnicas de inteligencia artificial, mediante una Red Neuronal Convolucional.",
        meta: "Artificial Inteligent",
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
    {
        id: 4,
        tooltipId: "pj4",
        portfolioImage: "img/portfolio/9.png",
        // portfolioLink: "https://www.instagram.com/",
        portfolioPreview: "img/portfolio/9a.png",
        title: "Sistema de odontología.",
        meta: "Web Development",
        // clientName: "Alvaro Morata",
        category: "Desarrollo web",
        date: "Julio 12, 2019",
        projectDescriptions: (
            <>
                <p>
                    Se creó un sistema de gestión de pacientes, para los
                    estudiantes de la carrera de Odontología de la Universidad
                    Estatal de Guayaquil, para el manejo de odontograma, gestión
                    de exámenes médicos, gestión de los datos de los pacientes.
                    registrar a los estudiantes tratantes, gestionar los
                    perfiles de usuario, etc.
                </p>
            </>
        ),
    },
    {
        id: 6,
        tooltipId: "pj6",
        portfolioImage: "img/portfolio/12.png",
        // portfolioLink: "https://www.instagram.com/",
        portfolioPreview: "img/portfolio/12a.png",
        title: "Proyecto Claro video.",
        meta: "Database management",
        // clientName: "Alvaro Morata",
        category: "Administrador de base de datos",
        date: "Marzo, 2020",
        projectDescriptions: (
            <>
                <p>
                    • Desarrollo de procedimientos en Oracle - PL/SQL, siguiendo
                    los estándares de la empresa, para CROSSELING.
                </p>
                <p>
                    • Atención de requerimientos de corrección de errores en
                    códigos fuentes que sean identificados posterior a las
                    pruebas de software.
                </p>
            </>
        ),
    },
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

    return (
        <div className="portfolio_inner my_carousel gallery_zoom">
            <ul data-aos="fade-right" data-aos-duration="1200">
                <Slider {...settings}>
                    {portfolioData.map((item) => (
                        <li key={item.id}>
                            <div className="list_inner">
                                <div className="image">
                                    <div
                                        onClick={() => handleModle(item?.id)}
                                        className="details"
                                    >
                                        <img
                                            src={
                                                item?.portfolioPreview !==
                                                undefined
                                                    ? item?.portfolioPreview
                                                    : item?.portfolioImage
                                            }
                                            data-tip
                                            data-for={item.tooltipId}
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
                                                <span>{item.meta}</span>
                                            </div>
                                        </ReactTooltip>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </Slider>
            </ul>
            {/* End ul */}

            {/* Start Modal  */}
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
                                        {singleData?.clientName !==
                                            undefined && (
                                            <li>
                                                <h5>Cliente</h5>
                                                <span>
                                                    {singleData?.clientName}
                                                </span>
                                            </li>
                                        )}

                                        {singleData?.category !== undefined && (
                                            <li>
                                                <h5>Categoría</h5>
                                                <span>
                                                    {singleData?.category}
                                                </span>
                                            </li>
                                        )}

                                        {singleData?.date !== undefined && (
                                            <li>
                                                <h5>Datos</h5>
                                                <span>{singleData?.date}</span>
                                            </li>
                                        )}

                                        {singleData?.portfolioLink !==
                                            undefined && (
                                            <li>
                                                <h5>Más información</h5>
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
                                            </li>
                                        )}

                                        {singleData?.share !== undefined && (
                                            <li className="news_share d-blok">
                                                <h5>Share</h5>
                                                {/* <Social /> */}
                                            </li>
                                        )}
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
            {/* End modal  */}
        </div>
    );
};

export default Portfolio;
