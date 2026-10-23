<script>
    import ToDoItem from "#lib/todoList/toDoItem.svelte";
    import { todoList, addToList } from "#lib/todoList/toDoState.svelte.js";


    let newToDoData = $state('')
    // let count = $state(0);
    let todoListCount = $derived(todoList.length)
    // function incrementCount() {
    //     console.log("clicked count", count)
    //     count++;
    // }

    function observeEvent(eventData) {
        console.log(eventData)
    }

    $effect(() => {
        //fetch catfacts


    })
</script>

<!-- <button onclick={incrementCount}>Increment</button>  -->
<button onclick={function(event) {
    observeEvent(event)

}} >Observe Event</button>

<!-- <div>Count {count}</div> -->
<button onclick={function() {addToList(newToDoData)}}>Add to todo list</button>
<input bind:value={newToDoData} />

<div>ToDo List Count: {todoListCount}</div>
<ul>
    {#each todoList as todoItem, idx (idx)}
        <li>
            <ToDoItem index={idx} banana="yellow">
                <div>!!!!</div>
            </ToDoItem>
        </li>
    {/each}
</ul>

{#if todoListCount === 0} 
    <p>Add a to do item!</p>
{:else if todoListCount < 10}
    <p>That's a good to do list</p>
{:else}
    <p>That's too many items!!!</p>
{/if}


<style>
    .welcome-line {
        color: blue;
    }
    div {
        color: green;
    }
</style>

<svelte:window onkeydown={(event) => {
    console.log(event.key)
}} />
