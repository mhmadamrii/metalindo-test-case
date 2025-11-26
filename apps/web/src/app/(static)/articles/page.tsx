import styles from './page.module.css';
import Loader from '@/components/loader';

import { Suspense } from 'react';

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
      <Suspense fallback={<Loader />}>
        <div className={styles.grid}>
          <ArticleWithData />
        </div>
      </Suspense>
    </div>
  );
}
