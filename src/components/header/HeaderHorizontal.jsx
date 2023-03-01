import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

// logo name
// const logo = "dark";
// const logo2 = "light";
const logo2 = "MLight3";
const logo = "MDark1";

const sidebarContent = [
    {
        icon: "home",
        itemName: "Principal",
        itemRoute: "#home",
        activeClass: "active",
    },
    {
        icon: "human",
        itemName: "Sobre^Mí",
        // itemName: "Sobre Mí",
        itemRoute: "#about",
        activeClass: "",
    },
    {
        icon: "service",
        itemName: "Servicio",
        itemRoute: "#service",
        activeClass: "",
    },
    {
        icon: "portfolio",
        itemName: "Portafolio",
        itemRoute: "#portfolio",
        activeClass: "",
    },
    // {
    //     icon: "testimonial",
    //     itemName: "Testimonio",
    //     itemRoute: "#testimonial",
    //     activeClass: "",
    // },
    // { icon: "blog", itemName: "Blog", itemRoute: "#blog", activeClass: "" },
    {
        icon: "contact",
        itemName: "Contacto",
        itemRoute: "#contact",
        activeClass: "",
    },
];

// sidebar footer bottom content
const sidebarFooterContent = {
    name: "Tony",
    email: "tveascervantes@hotmail.com",
    emailRef: "mailto:tveascervantes@hotmail.com",
};

const HeaderHorizontal = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        <div className={`horizontal-menu ${navbar ? "fixed-header" : ""}`}>
            <div className="mob-header">
                {/* <h1>HeaderHorizontal</h1> */}
                <button className="toggler-menu" onClick={handleClick}>
                    <div className={click ? "active" : ""}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
            {/* End Mobile Header */}

            <div
                className={
                    click ? "edina_tm_sidebar  menu-open" : "edina_tm_sidebar"
                }
            >
                <div className="sidebar_inner">
                    <div className="logo">
                        <Link>
                            <img
                                className="logo_light"
                                src={`img/logo/${logo}.png`}
                                alt="brand"
                            />
                            <img
                                className="logo_dark"
                                src={`img/logo/${logo2}.png`}
                                alt="brand"
                            />
                        </Link>
                    </div>
                    {/* End .logo */}

                    <div className="menu">
                        <ScrollspyNav
                            scrollTargetIds={[
                                "home",
                                "about",
                                "service",
                                "portfolio",
                                // "testimonial",
                                // "blog",
                                "contact",
                            ]}
                            activeNavClass="active"
                            offset={-80}
                            scrollDuration="100"
                        >
                            <ul className="anchor_nav">
                                {sidebarContent.map((val, i) => (
                                    <li key={i}>
                                        <div className="list_inner">
                                            <a
                                                href={val.itemRoute}
                                                className={val.activeClass}
                                                onClick={handleClick}
                                            >
                                                <img
                                                    className="svg custom"
                                                    src={`img/svg/${val.icon}.svg`}
                                                    alt="icon"
                                                />
                                                {val.itemName}
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </ScrollspyNav>
                    </div>
                    {/* End .menu */}

                    <div className="author">
                        <div className="inner">
                            <div className="short">
                                <h3>{sidebarFooterContent.name}</h3>
                                <a href={sidebarFooterContent.emailRef}>
                                    {sidebarFooterContent.email}
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End author */}
                </div>
            </div>
        </div>
    );
};

export default HeaderHorizontal;
