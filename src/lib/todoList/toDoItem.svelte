<script>
  import { todoList, deleteElement } from "./toDoState.svelte";

    const { index, children } = $props();
    const textValue = $derived(todoList[index]);
</script>

<style>
    .isUnderlined {
        color: green;
    }

</style>

<li>
    {textValue} <button onclick={() => {
        console.log("delete me" )   
        deleteElement(index)
    
    }}
    class:isUnderlined={index % 2 == 0}
    >Done! {@render children()}</button>
</li>