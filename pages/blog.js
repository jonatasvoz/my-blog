import Head from 'next/head';
import styles from '../styles/Blog.module.css';

const blogPosts = [
    { id: 1, title: 'Meu Primeiro Post', description: 'Uma breve introdução ao meu blog.', date: '2024-11-30' },
    { id: 2, title: 'Dicas de Desenvolvimento', description: 'Como otimizar sua aplicação web.', date: '2024-11-25' },
];

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog | Meu Site</title>
                <meta name="description" content="Leia artigos e dicas sobre [assunto]." />
            </Head>

            <main className={styles.container}>
                <h1>Blog</h1>
                <div className={styles.posts}>
                    {blogPosts.map((post) => (
                        <article key={post.id} className={styles.post}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <small>{post.date}</small>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}
