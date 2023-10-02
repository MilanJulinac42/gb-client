import React from "react";
import styles from "./Benefits.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons";

const Benefits: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionHeading}>
        Benefits and stuff and other stuff
      </h1>
      <div className={styles.icons}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faGift}
          ></FontAwesomeIcon>
          <h3>Thoughtful and Unique Gifts</h3>
          <p>
            At Regalo, we believe in the power of thoughtful gifting. Our gift
            baskets go beyond ordinary presents, offering a unique and curated
            experience for your loved ones. With a diverse selection of
            carefully chosen items, each basket tells a story and conveys your
            sentiments in a way that words alone cannot. Give the gift of
            thoughtfulness and make every occasion memorable with our exclusive
            range of handcrafted gift baskets.
          </p>
        </div>
        <span className={styles.spanBorder}></span>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faHeart}
          ></FontAwesomeIcon>
          <h3>Endless Variety for Every Taste</h3>
          <p>
            Discover a world of flavors and delights with our extensive
            collection of gift baskets. From gourmet treats and premium
            chocolates to spa essentials and delightful surprises, our baskets
            cater to every taste and preference. Whether you are celebrating a
            birthday, expressing gratitude, or sending holiday cheer, our
            diverse range ensures that there is a perfect basket for every
            occasion. Elevate your gift-giving experience with the unmatched
            variety and quality of Regalo.
          </p>
        </div>
        <span className={styles.spanBorder}></span>

        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faFaceGrinHearts}
          ></FontAwesomeIcon>
          <h3>Convenient and Stress-Free Gifting</h3>
          <p>
            Say goodbye to the hassle of finding the perfect gift Regalo is
            here to make gifting a breeze. Our online platform offers a
            convenient and stress-free shopping experience, allowing you to
            browse, choose, and send beautiful gift baskets with just a few
            clicks. With reliable shipping and secure payment options, we take
            the stress out of gifting, letting you focus on the joy of giving.
            Experience the ease of gifting with Regalo, where convenience meets
            heartfelt celebration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
