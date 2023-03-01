import React from "react";
import { Link } from "react-router-dom";
// logo name
// const logo = "dark";
// const logo2 = "light";
const logo = "MDark1";
const logo2 = "MLight3";

const HeaderMobile = () => {
    return (
        <>
            <div className="logo">
                <Link to="/">
                    <img
                        className="logo_dark"
                        src={`img/logo/${logo}.png`}
                        alt="brand"
                    />
                    <img
                        className="logo_light"
                        src={`img/logo/${logo2}.png`}
                        alt="brand"
                    />
                </Link>
            </div>
            {/* End .logo */}
        </>
    );
};

export default HeaderMobile;
