// on import useSelector pour utiliser le state de redux dans notre composant
import { useSelector } from "react-redux";
import { selectDisplayText } from "./selectors";

export function Display() {
  const text = useSelector(selectDisplayText);
  return <p className="display">{text}</p>;
}
