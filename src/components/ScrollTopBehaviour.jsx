import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTopBehaviour() {
    const { pathname } = useLocation();
    /* console.log("pathname", pathname); */

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
