<script>
  import ToDoItem from "#lib/todoList/toDoItem.svelte";
    import TicTacToeCell from "./TicTacToeCell.svelte";
    import {
        getCurrentPlayerState, 
        updateCurrentPlayerState
    } from './TicTacToeState.svelte.js';

    const boardData = $state(
        [['X', undefined, undefined],
        [undefined, 'Y', undefined],
        [undefined, undefined,'X']]
    )


    function updateBoardData(x, y, nextValue = 'X') {
        boardData[x][y] = nextValue;
        updateCurrentPlayerState();
    }

</script>

<style>


    .board {
        display: grid;
        grid-template-columns: repeat(3, 20px);
    }

</style>

<div class="board">
    {#each boardData as row, rowIdx }
        {#each row as cell, colIdx}
            <TicTacToeCell cellValue={cell} col={colIdx} row={rowIdx}
            onClick={updateBoardData}
            />
        {/each}
    {/each}

</div>