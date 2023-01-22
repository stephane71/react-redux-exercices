import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../../store/counter/selectors";
import { increment, decrement } from "../../store/counter/slice";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>JSX du composant ... Valeur du compteur {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
