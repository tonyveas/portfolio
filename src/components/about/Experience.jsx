import React from "react";

const experienceContent = [
    {
        year: "2022 Enero - 2022 Noviembre",
        position:
            "Desarrollador de Software - Módulo Teller COBIS CORP - BANISTMO",
        compnayName: "Clear Minds Consultores S.A.",
        details: [
            "•Desarrollador de Software – Módulo Teller COBIS CORP - BANISTMO",
            "•Metodología ágil SCRUM: Entregas continuas de software y ceremonias ágiles (Sprint Planning, Spring daily, Sprint Retrospective y Sprint Review)",
            "•Desarrollo de front-end sobre la base de un requerimiento funcional (Java, Maven, Javascript, y typescript).",
            "•Soporte general al docente de la materia.",
            "•Desarrollo de back-end usando lógica de Stored Procedures.",
            "•Manejo de base de datos (SQL, MySQL).",
            "•Ejecución de pruebas unitarias de frontend y backend para los desarrollos realizados (Junit y Mockito).",
            "•Análisis y corrección de la calidad de código (Sonar).",
            "•Uso de herramientas de control de versiones (Git – TortoiseGit), siguiendo el modelo de flujos de ramas y aprobaciones de Gitflow Workflow (develop, quality, máster, staging).",
            "•Atención de requerimientos de corrección de errores en códigos fuentes que sean identificados posterior a las pruebas de software.",
            "•Uso de AWS para la gestión de los logs del sistema. Detección y corrección de errores.",
        ],
    },
    {
        year: "2021 Enero - 2021 Octubre",
        position: "Desarrollador de software",
        compnayName:
            "Unidad de Bienestar Estudiantil y Politécnico (UBEP) - ESPOL",
        details: [
            "•Metodología Design Thinking (Empatizar, definir, idear, prototipar, y evaluar)",
            "•Levantamiento y validación de requerimientos funcionales y no funcionales a modo de historias de usuario",
            "•Prototipado de la solución propuesta con fines de demostración y evaluación del producto de software (MarvelApp).",
            "•Diseño de la solución: Elaboración de diagramas de base de datos, casos de uso, despliegue y actividades.",
            "•Uso de herramientas de control de versiones (Git).",
            "•Desarrollo de back-end y API (Laravel - PHP).",
            "•Desarrollo de aplicación móvil (IONIC - React, ReactJS o React.js - Typescript)",
            "•Desarrollo de aplicación web (React, ReactJS o React.js - Typescript - Ant Design)",
            "•Despliegue de base de datos MYSQL en Clever Cloud.",
            "•Despliegue de API y aplicación web en Heroku.",
        ],
    },
    {
        year: "2020 Enero - 2020 Septiembre",
        position: "Desarrollador de software",
        compnayName: "Hospital León Becerra - Programa Excelencia Hospitalaria",
        details: [
            "•Participación en el desarrollo ágil de productos dentro de los marcos multifuncionales (Metodología ágil SCRUM), usando Asana para la gestión del trabajo",
            "•Socialización con las partes interesadas y cliente durante todo el ciclo de vida del desarrollo del sistema.",
            "•Levantamiento y validación de requerimientos funcionales desde la perspectiva de los usuarios finales.",
            "•Prototipado de alta fidelidad de la solución propuesta con fines de demostración y evaluación del producto de software (MarvelApp).",
            "•Elaboración de diagramas de base de datos, casos de uso, despliegue y actividades.",
            "•Desarrollo de back-end/API (Laravel - PHP).",
            "•Desarrollo de aplicación móvil (IONIC - React, ReactJS o React.js - Typescript).",
            "•Despliegue de base de datos MYSQL en Clever Cloud.",
            "•Despliegue de API en Heroku.",
        ],
    },
    {
        year: "2020 Febrero - 2020 Marzo",
        position: "Administrador de base de datos",
        compnayName: "Sudamericana de Software S.A. (SASF)",
        details: [
            "•Desarrollo de procedimientos en Oracle - PL/SQL, siguiendo los estándares de la empresa",
            "•Atención de requerimientos de corrección de errores en códigos fuentes que sean identificados posterior a las pruebas de software",
        ],
    },
    {
        year: "2017 Octubre - 2018 Marzo",
        position: "Ayudante de docencia",
        compnayName: "ESPOL",
        details: [
            "•Atención de consultas académicas de los estudiantes con respecto a la materia de fundamentos de programación en Python",
            "•Calificación de talleres y tareas de los estudiantes",
            "•Soporte general al docente de la materia.",
        ],
    },
];

const Experience = () => {
    return (
        <ul>
            {experienceContent.map((val, i) => (
                <li key={i}>
                    <div className="icon">
                        <img src="img/about/briefcase.png" alt="icon" />
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">
                        {val.year}
                    </span>
                    <h5 className="poppins-font text-uppercase">
                        {val.position}
                        <span className="place open-sans-font">
                            {val.compnayName}
                        </span>
                    </h5>
                    {val.details.map((detail) => (
                        <p className="open-sans-font">{detail}</p>
                    ))}
                </li>
            ))}
        </ul>
    );
};

export default Experience;
