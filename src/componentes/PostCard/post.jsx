/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

import styles from "./post.module.css"
import BotaoPrincipal from "../botaoPrincipal/botao"

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>

            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`../../../public/posts/${post.id}/capa.png`}
                    alt="imagem de capa do post"
                />

                <h2 className={styles.titulo}>
                    {post.titulo}
                </h2>

                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </div>

        </Link>
    )
}