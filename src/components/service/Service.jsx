import React, { useState } from "react";
import Modal from "react-modal";
// import Tilt from "react-parallax-tilt";
import ModalFour from "./modal/ModalFour";
import ModalOne from "./modal/ModalOne";
import ModalThree from "./modal/ModalThree";
import ModalTwo from "./modal/ModalTwo";

Modal.setAppElement("#root");

const Service = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }
    function toggleModalTwo() {
        setIsOpen2(!isOpen2);
    }
    function toggleModalThree() {
        setIsOpen3(!isOpen3);
    }
    function toggleModalFour() {
        setIsOpen4(!isOpen4);
    }

    return (
        <div className="service_list">
            <ul>
                {/* Start Service Motion & Web Graphy */}
                <li>
                    <div className="list_inner">
                        <div className="hover">
                            <img
                                className="svg custom"
                                src="img/svg/5.svg"
                                alt=""
                            />
                            <div className="service_title">
                                <h3>Desarrollo Front-end</h3>
                            </div>
                        </div>
                    </div>
                </li>
                {/* End Service Motion & Web Graphy */}

                {/* Start Service Ui/Ux Consultancy */}
                <li
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                >
                    <div className="list_inner">
                        <div className="hover">
                            <img
                                className="svg custom"
                                src="img/svg/8.png"
                                alt=""
                            />
                            <div className="service_title">
                                <h3>Desarrollo Back-end</h3>
                            </div>
                        </div>
                    </div>{" "}
                </li>
                {/* End Service Ui/Ux Consultancy */}

                {/* Start Service Branding & Design */}
                <li
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                >
                    <div className="list_inner">
                        <div className="hover">
                            <img
                                className="svg custom"
                                src="img/svg/7.png"
                                alt=""
                            />
                            <div className="service_title">
                                <h3>Desarrollo móvil</h3>
                            </div>
                        </div>
                    </div>
                </li>
                {/* End Service Branding & Design */}

                {/* Start Service Mobile App Design */}
                <li
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                >
                    <div className="list_inner">
                        <div className="hover">
                            <img
                                className="svg custom"
                                src="img/svg/9.png"
                                alt=""
                            />
                            <div className="service_title">
                                <h3>Desarrollo de software en general</h3>
                            </div>
                        </div>
                    </div>
                </li>
                {/* End Service Mobile App Design */}
            </ul>

            {/* Start Modal Motion Graphy */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
            >
                <div className="edina_tm_modalbox">
                    <button className="close-modal" onClick={toggleModalOne}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* End close icon */}

                    <div className="box_inner">
                        <div className="description_wrap ">
                            <ModalOne />
                        </div>
                    </div>
                    {/* End box inner */}
                </div>
                {/* End modal box news */}
            </Modal>
            {/* End Modal Motion Graphy */}

            {/* Start Modal Branding & Design */}
            <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
            >
                <div className="edina_tm_modalbox">
                    <button className="close-modal" onClick={toggleModalTwo}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* End close icon */}

                    <div className="box_inner">
                        <div className="description_wrap ">
                            <ModalTwo />
                        </div>
                    </div>
                    {/* End box inner */}
                </div>
                {/* End modal box news */}
            </Modal>
            {/* End Modal Branding & Design */}

            {/* Start Modal Mobile App Design */}
            <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
            >
                <div className="edina_tm_modalbox">
                    <button className="close-modal" onClick={toggleModalThree}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* End close icon */}

                    <div className="box_inner">
                        <div className="description_wrap ">
                            <ModalThree />
                        </div>
                    </div>
                    {/* End box inner */}
                </div>
                {/* End modal box news */}
            </Modal>
            {/* End Modal Mobile App Design*/}

            {/* Start Modal Modal Ui/Ux Consultancy */}
            <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
            >
                <div className="edina_tm_modalbox">
                    <button className="close-modal" onClick={toggleModalFour}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* End close icon */}

                    <div className="box_inner">
                        <div className="description_wrap">
                            <ModalFour />
                        </div>
                    </div>
                    {/* End box inner */}
                </div>
                {/* End modal box news */}
            </Modal>
            {/* End Modal Ui/Ux Consultancy*/}
        </div>
    );
};

export default Service;
