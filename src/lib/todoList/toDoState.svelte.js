export const todoList = $state([]);

export function addToList(text) {
    todoList.push(text)
}

export function deleteElement(idx) {
    todoList.splice(idx, 1);
}