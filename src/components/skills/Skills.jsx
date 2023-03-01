import React from "react";

const skillsContent = [
    {
        name: "React, ReactJS o React.js",
        skillPercent: "95",
    },
    {
        name: "JUnit",
        skillPercent: "95",
    },
    {
        name: "Laravel",
        skillPercent: "95",
    },
    {
        name: "IONIC framework",
        skillPercent: "95",
    },
    {
        name: "Python",
        skillPercent: "95",
    },
    {
        name: "Boostrap",
        skillPercent: "95",
    },
    {
        name: "Java",
        skillPercent: "95",
    },
    {
        name: "Git",
        skillPercent: "80",
    },
    {
        name: "Javascript, HTML y CSS",
        skillPercent: "80",
    },
    {
        name: "Typescript",
        skillPercent: "80",
    },
    {
        name: "Angular",
        skillPercent: "90",
    },
    {
        name: "Spring Boot (Básico)",
        skillPercent: "90",
    },
];

const Skills = () => {
    return (
        <>
            {skillsContent.map((val, i) => (
                <div className="progress_inner" key={i}>
                    <span className="label">• {val.name}</span>

                    {/* <div className="background">
                        <div className="bar">
                            <div
                                className="bar_in"
                                style={{ width: val.skillPercent + "%" }}
                            ></div>
                        </div>
                    </div> */}
                </div>
            ))}
        </>
    );
};

export default Skills;
