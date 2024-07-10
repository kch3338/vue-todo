const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i=0; i<localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    }
}

const state = {
    headerText: "TODO it!",
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addItem(state, todoItem) {
        const obj = {
            completed: false,
            item: todoItem
        };
        localStorage.setItem(todoItem, JSON.stringify(obj)); // this => TodoInput Component
        state.todoItems.push(obj);
    },

    toggleItem(state, { todoItem, index }) {
        // todoItem.completed = !todoItem.completed; // 안티 패턴
        state.todoItems[index].completed = !state.todoItems[index].completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },

    removeItem(state, { todoItem, index }) {
        localStorage.removeItem(todoItem.item);
        state.todoItems.splice(index, 1);
    },

    clearItems (state) {
        localStorage.clear();
        state.todoItems = [];
    }
}

export default { state, getters, mutations };