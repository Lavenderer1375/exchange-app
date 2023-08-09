import React from "react";

//Styles
import styles from "./Coin.module.css";

const Coin = ({ name, image, symbol, currentPrice, marketCap, priceChange }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>Symbol:<br/><br/>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>Current Price:<br/><br/>$ {currentPrice.toLocaleString()}</span>
      <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>P 24H C:<br/><br/>{priceChange}</span>
      <span className={styles.marketCap}>Market Cap:<br/><br/>$ {marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
