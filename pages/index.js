import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
    };

    return (
        <>
            <Head>
                <title>Minha Página Home</title>
                <meta name="description" content="Bem-vindo ao meu site criado com Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header className={styles.header}>
                <nav>
                    <div className={styles.logo}>Meu Site</div>
                    <ul className={styles.navLinks}>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className={styles.hero}>
                    <h1>Bem-vindo ao Meu Site</h1>
                    <p>Explore nosso conteúdo e descubra o que temos a oferecer.</p>
                    <button onClick={() => scrollToSection('sobre')}>Saiba Mais</button>
                </section>
                <section id="sobre" className={styles.section}>
                    <h2>Sobre Nós</h2>
                    <p>Somos uma empresa dedicada a fornecer as melhores soluções para nossos clientes.</p>
                </section>
                <section id="servicos" className={styles.section}>
                    <h2>Nossos Serviços</h2>
                    <ul>
                        <li>Desenvolvimento Web</li>
                        <li>Design Gráfico</li>
                        <li>Consultoria Técnica</li>
                    </ul>
                </section>
                <section id="contato" className={styles.section}>
                    <h2>Contato</h2>
                    <p>Envie-nos uma mensagem para saber mais.</p>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Seu Nome" required />
                        <input type="email" placeholder="Seu E-mail" required />
                        <textarea placeholder="Sua Mensagem" required />
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}
