// on import useSelector pour utiliser le state de redux dans notre composant
import { useSelector } from "react-redux";

export function Display() {
  // on utilise useSelector avec en paramètre une fonction
  // Il permet de récupérer la propriété 'playing' du state
  const gameIsPlaying = useSelector((state) => state.playing);

  // on utilise ensuite cette valeur dans le rendu
  return <p>{gameIsPlaying ? "Jeu en cours" : "C'est la pause"}</p>;
}