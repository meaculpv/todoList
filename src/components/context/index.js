import React, { createContext, useState } from "react";
import { useTodos, useLists, useFilterTodos, useListsWithStats } from "../hooks";

const TodoContext = createContext();

function TodoContextProvider({children}) {
    const defaultList = "today";
    const defaultPriority = "1";
    const [selectedList, setSelectedList] = useState(defaultList);
    const [selectedPriority, setSelectedPriority] = useState(defaultPriority);
    const [selectedTodo, setSelectedTodo] = useState(undefined);
    const todos = useTodos();
    const lists = useLists(todos);
    const listsWithStats = useListsWithStats(lists, todos);
    const filteredTodos = useFilterTodos(todos, selectedList);

    return (
        <TodoContext.Provider
            value={{
                defaultList,
                selectedList,
                setSelectedList,
                todos: filteredTodos,
                lists: listsWithStats,
                selectedTodo,
                setSelectedTodo,
                selectedPriority,
                setSelectedPriority,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContextProvider, TodoContext };