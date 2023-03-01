import React from "react";
import {
    // FiFacebook,
    // FiTwitter,
    // FiInstagram,
    // FiDribbble,
    FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
    {
        iconName: <FiLinkedin />,
        link: "https://www.linkedin.com/in/tony-veas-cervantes-091501199/",
    },
];
const Social = () => {
    return (
        <ul>
            {SocialShare.map((val, i) => (
                <li key={i}>
                    <a href={val.link} target="_blank" rel="noreferrer">
                        {val.iconName}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Social;
