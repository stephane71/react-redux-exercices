import styles from "./CityOverview.module.css";
import { NB_RESIDENTS_LIMIT } from "../../utils/enums";

const IMG_SIZE = 50;
const EMPTY_FLAG = "./logo192.png";

export default function CityOverview({ city }) {
  const { nom: name, code, population } = city;

  function handleError(e) {
    const { target } = e;
    target.src = EMPTY_FLAG;
  }

  return (
    <div className={styles.CityOverview}>
      <img
        alt="flag"
        src={`./${name}${code}.svg`}
        width={IMG_SIZE}
        height={IMG_SIZE}
        onError={handleError}
      />
      <div className={styles.right}>
        <div>{name}</div>
        <div>{code}</div>
        {population > NB_RESIDENTS_LIMIT * 3 ? (
          <div className={styles.residentsInfo}>{`+ de 300 000 hbs`}</div>
        ) : null}
      </div>
    </div>
  );
}
