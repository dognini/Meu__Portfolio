import styles from "./sobreMim.module.css"
import fotoSobreMim from "../../assets/diogo.png"
import PostModelo from '../../componentes/postModelo/postModelo.jsx';

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={'../../assets/sobre_mim_capa.png'}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Diogo
            </h3>

            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt='Foto do diogo'
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Front-end Developer na Gruppe Tecnologia
                e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha Historia com programação começou na Gruppe tecnologia, quando fui contratado como Jovem Aprendiz através do CIEE.
                Tive um periodo na empresa onde eu só estudava, onde eu aprendi lógica de programação, desenvolvimento web e o básico de algumas linguagens, como PHP,
                Python e Java, mas a que eu mais me aprofundei foi o JavaScript e o framework React.
            </p>
            <p className={styles.paragrafo}>
                Na Gruppe Tecnologia trabalhei em um projeto para a Associação Brasileira de Agência de viagens (ABAV).
                No momento estou estudando, para me aprofundar mais em JavaScript e React.
            </p>

        </PostModelo>
    )
}