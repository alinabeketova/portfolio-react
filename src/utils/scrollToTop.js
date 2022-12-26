import {useEffect} from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { patname } = useLocation();

    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [patname]);

    return null;
}