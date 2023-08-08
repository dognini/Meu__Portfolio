import styles from "./menuLink.module.css"
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function MenuLink({ children, to }) {
    const localizacao = useLocation();

    return (
        <Link className={` ${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ""} `} to={to}>
            {children}
        </Link >
    )
}