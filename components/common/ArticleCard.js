import Image from "next/image";
import styles from "../../styles/ArticleCard.module.scss";

const ArticleCard = (data) => {
  const { id, img, author, header, text } = data;

  console.log(img);

  return (
    <div className={styles.cardBody}>
      <div className={styles.cardImg}>
        <Image
          src={img}
          width='100%'
          height='200px'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className={styles.cardText}>
        <p className={styles.author}>{author}</p>
        <h4>{header}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
