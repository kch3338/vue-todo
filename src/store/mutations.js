const addItem = (state, todoItem) => {
    const obj = {
        completed: false,
        item: todoItem
    };
    localStorage.setItem(todoItem, JSON.stringify(obj)); // this => TodoInput Component
    state.todoItems.push(obj);
}

const toggleItem = (state, { todoItem, index }) => {
    // todoItem.completed = !todoItem.completed; // 안티 패턴
    state.todoItems[index].completed = !state.todoItems[index].completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}

const removeItem = (state, { todoItem, index }) => {
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
}

const clearItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addItem, toggleItem, removeItem, clearItems };