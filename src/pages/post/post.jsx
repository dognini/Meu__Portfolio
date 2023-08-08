import './post.css'
import styles from "./post.module.css"

import ReactMarkdown from "react-markdown"
import { Route, Routes, useParams } from "react-router-dom"

import posts from "../../json/posts.json"
import NaoEncontrada from './../naoEncontrada/naoEncontrada'
import PostModelo from "../../componentes/postModelo/postModelo"
import PaginaPadrao from './../../componentes/pagina-padrao/paginaPadrao'
import PostCard from './../../componentes/PostCard/post';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    console.log(postsRecomendados);

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post} />
                                </li>
                            ))}
                        </ul>
                    </PostModelo>
                } />
            </Route>
        </Routes>
    )
}