<script>
    import {getCurrentPlayerState} from './TicTacToeState.svelte.js';

    const props = $props()
</script>

<style>

    .cell {
        height: 20px;
        width: 20px;
        font-size: 18px;
        color: green;
        background-color: black;
        border: 1px solid gray;
    }

</style>

<div class="cell" onclick={() => props.onClick(props.row, props.col, getCurrentPlayerState())}>
    {#if props.cellValue}
        {props.cellValue}
    {/if}
</div>