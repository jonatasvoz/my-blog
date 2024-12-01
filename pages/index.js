import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Meu Portfólio</title>
                <meta name="description" content="Página inicial do meu portfólio" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Cabeçalho */}
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navLinks}>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#portfolio">Portfólio</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>

            {/* Seção "Sobre Mim" */}
            <section id="sobre" className={styles.section}>
                <h1>Sobre Mim</h1>
                <p>
                    Olá, meu nome é [Seu Nome]. Sou um [sua profissão] especializado em [área de atuação].
                    Meu objetivo é [seu objetivo profissional]. Confira meu trabalho na seção de portfólio abaixo!
                </p>
            </section>

            {/* Seção Portfólio */}
            <section id="portfolio" className={styles.section}>
                <h1>Portfólio</h1>
                <div className={styles.portfolio}>
                    {/* Exemplo de Vídeo */}
                    <div className={styles.mediaItem}>
                        <video controls>
                            <source src="https://www.youtube.com/watch?v=eHRsEZjdCjI" type="url" />
                            Seu navegador não suporta a reprodução de vídeos.
                        </video>
                        <p>Projeto de Vídeo: [Descrição]</p>
                    </div>

                    {/* Exemplo de Áudio */}
                    <div className={styles.mediaItem}>
                        <audio controls>
                            <source src="/media/sample-audio.mp3" type="audio/mpeg" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                        <p>Projeto de Áudio: [Descrição]</p>
                    </div>
                </div>
            </section>

            {/* Seção Blog */}
            <section id="blog" className={styles.section}>
                <h1>Blog</h1>
                <p>Explore meus artigos sobre [assunto relacionado ao seu trabalho ou interesses].</p>
                <a href="/blog" className={styles.blogLink}>
                 Ver todos os posts
                </a>
            </section>


            {/* Seção Contato */}
            <section id="contato" className={styles.section}>
                <h1>Contato</h1>
                <form className={styles.contactForm}>
                    <input type="text" placeholder="Seu Nome" required />
                    <input type="email" placeholder="Seu E-mail" required />
                    <textarea placeholder="Sua Mensagem" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>

            {/* Rodapé */}
            <footer className={styles.footer}>
                <p>&copy; 2024 Meu Portfólio. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}
