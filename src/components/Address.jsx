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
                        <h3>Phone</h3>
                        <ul>
                            <li>
                                <a href="Tel: +452 666 386">+452 666 386</a>
                            </li>
                            <li>
                                <a href="Tel: +465 562 226">+465 562 226</a>
                            </li>
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
                    <div className="icon">
                        <img src="img/address/email.png" alt="icon" />
                    </div>
                    {/* End icon */}
                    <div className="content">
                        <h3>Email</h3>
                        <ul>
                            <li>
                                <a href="mailto:ib-themes21@gmail.com">
                                    support@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ib-themes21@gmail.com">
                                    example@support.com
                                </a>
                            </li>
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
                        <h3>Address</h3>
                        <ul>
                            <li>
                                <p>
                                    Envato 121 King St,
                                    <br />
                                    Melbourne, Australia
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
