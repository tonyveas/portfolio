import React from "react";

const personalInfoContent = [
    { meta: "Nombre", metaInfo: "Tony " },
    { meta: "Apellido", metaInfo: "Veas" },
    // { meta: "Edad", metaInfo: "26 años" },
    { meta: "Nacionalidad", metaInfo: "Ecuatoriana" },
    { meta: "Ciudad", metaInfo: "Guayaquil" },
    { meta: "Celular", metaInfo: "+593 996797483" },
    // { meta: "Email", metaInfo: "tveascervantes@hotmail.com" },
    {
        meta: "Idiomas",
        metaInfo: {
            spanish: "Español",
            english: {
                habla: "Nivel A2 de inglés en conversación",
                lectura: "Nivel B1 de inglés en lectura",
                escritura: "Nivel A2 de inglés en escritura",
            },
        },
    },
];

const PersonalInfo = () => {
    return (
        <ul className="about-list list-unstyled open-sans-font">
            {personalInfoContent.map((val, i) => {
                return (
                    <li
                        key={i}
                        style={{
                            textAlign: val.meta === "" ? "center" : "",
                        }}
                    >
                        {val.meta === "Idiomas" ? (
                            <>
                                <span className="title">{val.meta} </span>
                                <br />
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                    • {val.metaInfo.spanish}
                                </span>
                                <br />
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                    • Inglés: {val.metaInfo.english.habla}.{" "}
                                    {val.metaInfo.english.lectura}.{" "}
                                    {val.metaInfo.english.escritura}
                                </span>
                                <br />
                                <span className="">
                                    Inglés en proceso de mejora por medio de
                                    estudio independiente y cursando curso de
                                    inglés en línea.{" "}
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="title">{val.meta}: </span>
                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                    {val.metaInfo}
                                </span>
                            </>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default PersonalInfo;
