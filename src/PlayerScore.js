import { useSelector } from "react-redux";

const selectPlayerHasAdvantage = (playerId) => {
    return (state) => state.advantage === playerId;
};

export function PlayerScore({ playerId, playerName }) {
    // on utilise playerId (qui est soit player1, soit player2) dans le selector pour accéder au score du joueur.
    const score = useSelector((state) => state[playerId]);
    const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId));

    return (
        <div className="player-score">
            <p>{playerName}</p>
            <p>{(hasAdvantage ? "Avantage " : "") + score}</p>
        </div>
    );
}