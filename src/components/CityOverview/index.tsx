import styles from "./CityOverview.module.css";
import Cities from "../../assets/cities.json";

const IMG_SIZE = 50;
const EMPTY_FLAG = "./logo192.png";

const CITY = Cities[20];

export default function CityOverview() {
  function handleError(e) {
    const { target } = e;
    target.src = EMPTY_FLAG;
  }

  return (
    <div className={styles.CityOverview}>
      <img
        alt="flag"
        src={`./${CITY.nom}${CITY.code}.svg`}
        width={IMG_SIZE}
        height={IMG_SIZE}
        onError={handleError}
      />
      <div className={styles.right}>
        <div>{CITY.nom}</div>
        <div>{CITY.code}</div>
      </div>
    </div>
  );
}
