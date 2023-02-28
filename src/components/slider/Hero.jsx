import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";

const heroContentSpanish = {
    shapeImage: "hero-shape",
    heroImage: "2",
    name: "Tony Veas",
    description: `Yo soy desarrollador de software.`,
};
const heroContentEnglish = {
    shapeImage: "hero-shape",
    heroImage: "2",
    name: "Rokers Nelson",
    description: `I'm a Freelancer Front-end React Developer based In USA, over 6 years of
  professional experience.`,
};

const Hero = () => {
    return (
        //    HERO
        <div className="edina_tm_hero" id="home">
            <div className="content">
                <div
                    className="img-shape"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    <img
                        src={`img/hero/${heroContentSpanish.shapeImage}`}
                        srcSet={`img/hero/${heroContentSpanish.heroImage}.jpg`}
                        alt="about author"
                    />
                </div>
                <div className="extra">
                    <h5
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                        className="hello"
                    >
                        Hello, I'm {heroContentSpanish.name}
                    </h5>
                    <h1
                        className="name"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                    >
                        <span className="typer-toper">
                            <ReactTyped
                                loop
                                typeSpeed={150}
                                backSpeed={60}
                                // strings={["Graphic Designer", "Web Developer"]}
                                strings={[
                                    "Desarrollador Full Stack",
                                    "Desarrollador Web",
                                    "Desarrollador de Front-end",
                                    "Desarrollador de Back-end",
                                ]}
                                smartBackspace
                                shuffle={false}
                                backDelay={1}
                                fadeOut={false}
                                fadeOutDelay={100}
                                loopCount={0}
                                showCursor
                                cursorChar="|"
                            />
                        </span>
                    </h1>
                    <p
                        className="text"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                    >
                        {heroContentSpanish.description}
                    </p>

                    <div
                        className="social"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                    >
                        <Social />
                    </div>
                    <div
                        className="edina_tm_button"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="500"
                    >
                        <a href="img/cv.jpg" download className="color">
                            Descargar Hoja de vida
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // /HERO
    );
};

export default Hero;
