import Image from "next/image";
import styles from "./index.module.css";

import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <ul>
        {news.map((article) => (
          <li key={article.id} className={styles.list}>
            <div className={styles.link}>
              <Image
                className={styles.image}
                src="/no-image.png"
                alt=""
                width={1200}
                height={630}
              />
              <dl className={styles.content}>
                <dt className={styles.title}>{article.title}</dt>
                <dd className={styles.meta}>
                  <span className={styles.tag}>{article.category.name}</span>
                  <span className={styles.date}>
                    <Image
                      src="/clock.svg"
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
