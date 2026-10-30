let currentPlayerTurn = $state('Y');

export function getCurrentPlayerState() {
    return currentPlayerTurn;
} 

export function updateCurrentPlayerState() {
    if (currentPlayerTurn === 'X') {
        currentPlayerTurn = 'Y';
    } else {
        currentPlayerTurn = 'X'
    }
}