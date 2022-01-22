import Image from "next/image";
import styles from "../../styles/ServicesCard.module.scss";

const ServicesCard = ({ data }) => {
  const { id, icon, header, text } = data;

  return (
    <div className={styles.cardBody}>
      <Image src={icon} width='72px' height='72' />

      <h3>{header}</h3>

      <p>{text}</p>
    </div>
  );
};

export default ServicesCard;
