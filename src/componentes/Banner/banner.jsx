import styles from "./banner.module.css"
import minhaFoto from "../../assets/diogo.png"
import circuloColorido from "../../assets/circulo_colorido.png"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu portfólio. Eu me chamo Diogo Dognini Corrêa, sou Front-end Developer na Gruppe Tecnologia. Aqui compartilho um pouco de mim e conhecimentos, espero que você goste.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Diogo Dognini Corrêa"
                />
            </div>
        </div>
    )
}