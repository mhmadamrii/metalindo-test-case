import { Suspense } from 'react';
import styles from './page.module.css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function ArticleWithData() {
  const articles: Post[] = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
  ).then((res) => res.json());

  return articles.map((post) => (
    <article key={post.id} className={styles.card}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <p className={styles.postContent}>{post.body}</p>
    </article>
  ));
}

export default function ArticlePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Articles</h1>
      <div className={styles.grid}>
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleWithData />
        </Suspense>
      </div>
    </div>
  );
}
