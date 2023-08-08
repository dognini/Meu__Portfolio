import styles from "./postModelo.module.css"

// eslint-disable-next-line react/prop-types
export default function PostModelo({titulo, children }) {
    return (
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} />

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}