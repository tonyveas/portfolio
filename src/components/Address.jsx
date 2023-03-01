import React from "react";

const Address = () => {
    return (
        <ul className="wrapper">
            <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner">
                    <div className="icon">
                        <img src="img/address/phone.png" alt="icon" />
                    </div>
                    {/* End icon */}
                    <div className="content">
                        <h3>Celular</h3>
                        <ul>
                            <li>
                                <a href="Tel: +593 996797483">+593 996797483</a>
                            </li>
                            <li>CNT/WhatsApp</li>
                            <li> </li>
                        </ul>
                    </div>{" "}
                    {/* End .content */}
                </div>
            </li>
            <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="100"
            >
                <div className="list_inner">
                    {/* <div className="icon">
                        <img src="img/address/email.png" alt="icon" />
                    </div> */}
                    {/* End icon */}
                    <div className="content">
                        <h3>Email</h3>
                        <ul>
                            <li>
                                <a href="mailto:tveascervantes@hotmail.com">
                                    tveascervantes@hotmail.com
                                </a>
                            </li>
                            <li>Estaré atento</li>
                        </ul>
                    </div>{" "}
                    {/* End .content */}
                </div>
            </li>
            <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
            >
                <div className="list_inner">
                    <div className="icon">
                        <img src="img/address/location.png" alt="icon" />
                    </div>
                    {/* End icon */}
                    <div className="content">
                        <h3>Dirección</h3>
                        <ul>
                            <li>
                                <p>
                                    Ecuador,
                                    <br />
                                    Guayas, Guayaquil
                                </p>
                            </li>
                        </ul>
                    </div>
                    {/* End .content */}
                </div>
            </li>
        </ul>
    );
};

export default Address;
