import React, { createContext, useState } from "react";
import { useTodos, useLists, useFilterTodos } from "../hooks";

const TodoContext = createContext();

function TodoContextProvider({children}) {
    const defaultList = "today";
    const [selectedList, setSelectedList] = useState(defaultList);

    const todos = useTodos();
    const lists = useLists(todos);
    const filteredTodos = useFilterTodos(todos, selectedList);

    return (
        <TodoContext.Provider
            value={{
                defaultList,
                selectedList,
                setSelectedList,
                todos: filteredTodos,
                lists,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContextProvider, TodoContext };