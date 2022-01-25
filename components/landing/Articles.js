import styles from "../../styles/Articles.module.scss";
import data from "../data/articles.json";
import ArticleCard from "../common/ArticleCard";

const Articles = () => {
  return (
    <section className={`${styles.articlesSection} section`}>
      <div className='container'>
        <h2>Latest Articles</h2>
        <div className={styles.flexContainer}>
          {data.map((article) => {
            return (
              <ArticleCard
                key={article.id}
                img={article.img}
                author={article.author}
                header={article.header}
                text={article.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
