import React from "react";
import styles from "./Shipping.module.scss";
import {
  faTruck,
  faCreditCard,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shipping: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.shipping}>
          <h3>Shipping Information <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon></h3>
          <p>
            We offer reliable and efficient shipping services to ensure your
            gift baskets reach their destination on time. Shipping costs may
            vary based on location and delivery speed. Please review the
            shipping details at checkout.
          </p>
        </div>
        <div className={styles.payment}>
          <h3>Payment Options</h3>
          <p>
            We provide convenient and secure payment options to enhance your
            shopping experience. Choose from the following payment methods:
          </p>
          <ul>
            <li className={styles.listItem}>
              <p>Credit Card (Online)</p>
              <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
            </li>
            <li className={styles.listItem}>
              <p>Cash on Delivery (In Person)</p>
              <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
            </li>
          </ul>
          <p>
            For online transactions, we accept major credit cards, ensuring a
            safe and seamless checkout process. If you prefer to pay in person,
            you can select the Cash on Delivery option at checkout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
