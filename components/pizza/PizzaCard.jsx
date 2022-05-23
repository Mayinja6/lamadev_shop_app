import Image from "next/image";
import styles from "../../styles/PizzaList.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.Pizzacard_container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.Pizzacard_title}>FIORI DI ZUCCA</h1>
      <span className={styles.Pizzacard_price}>$19.95</span>
      <p className={styles.Pizzacard_desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, aut?
      </p>
    </div>
  );
};

export default PizzaCard;
