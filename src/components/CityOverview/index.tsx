import styles from "./CityOverview.module.css";

const IMG_SIZE = 50;
const EMPTY_FLAG = "./logo192.png";

export default function CityOverview({ city }) {
  const { nom: name, code } = city;

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
      </div>
    </div>
  );
}
