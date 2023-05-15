export const selectPlayerHasAdvantage = (playerId) => {
    return (state) => state.advantage === playerId;
};

export const selectPlayerScore = (playerId) => {
    return (state) => state[playerId];
};

export const selectPlayerPoints = (playerId) => {
    return (state) =>
        state.history.filter((item) => item.winner === playerId).length;
};

export const selectDisplayText = (state) => {
    if(state.winner) {
        if(state.winner === "player1") {
            return "Joueur 1 gagne";
        } else {
            return "Joueur 2 gagne";
        }
    } else if(state.gameIsPlaying === false) {
        return "C'est la pause";
    } else {
        let text = '';
        if(state.advantage) {
            if(state.advantage === "player1") {
                text += " avantage joueur 1";
            } else {
                if(state.advantage === "player2") {
                    text += " avantage joueur 2";
                }
            }
        }
        else {
            text += "Le score est: " + state.player1 + " - " + state.player2;
        }
        return text;
    }
}

export const selectPointBeforeWin = (playerId) => {
    const otherPlayerId = playerId === "player1" ? "player2" : "player1";
    return (state) => {

        if(state.winner) {
            return null;
        }
        if(state.advantage === playerId) {
            return 1;
        }
        if(state.advantage === otherPlayerId) {
            return 3;
        }

        //si aucun joueur est en avantage on affiche pas le nombre de coup avant victoire
        return null
    }
}