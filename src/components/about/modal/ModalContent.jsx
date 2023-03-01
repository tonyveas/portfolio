import React from "react";
import Achievements from "../Achievements";
import PersonalInfo from "../PersonalInfo";
import Experience from "../Experience";
import Education from "../Education";

const ModalContent = () => {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h3>Información personal</h3>
                    <PersonalInfo />
                    <div className="edina_tm_button">
                        <a
                            href="https://drive.google.com/u/2/uc?id=1vp5uBdw6hCCanOwpIDn1WydSsp5LXjCQ&export=download"
                            download
                            className="color"
                        >
                            Descargar Hoja de vida
                        </a>
                    </div>
                </div>
                {/* End  PersonalInfo */}

                <div className="col-6 achievements-wrapper">
                    <h3>Logros</h3>
                    <Achievements />
                </div>
                {/* End  Achievements */}
            </div>
            {/* End .row */}

            <div className="row resume-box">
                <div className="col-6">
                    <h3>Experiencia</h3>
                    <Experience />
                </div>
                {/* End  Experience */}

                <div className="col-6">
                    <h3>Educación</h3>
                    <Education />
                </div>
                {/* End  Education */}
            </div>
        </>
    );
};

export default ModalContent;
