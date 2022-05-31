import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/PizzaList.module.css";

const PizzaCard = ({ pizza }) => {
  return (
    <Link href={`/product/${pizza._id}`}>
      <div className={styles.Pizzacard_container}>
        <Image src={pizza.img} alt="" width="500" height="500" />
        <h1 className={styles.Pizzacard_title}>{pizza.title}</h1>
        <span className={styles.Pizzacard_price}>{pizza.prices[0]}</span>
        <p className={styles.Pizzacard_desc}>{pizza.desc}</p>
      </div>
    </Link>
  );
};

export default PizzaCard;
