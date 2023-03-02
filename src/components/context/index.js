import React, { createContext, useState } from "react";
import { useTodos, useLists } from "../hooks";

const TodoContext = createContext();

function TodoContextProvider({children}) {
    const defaultList = "today";
    const [selectedList, setSelectedList] = useState(defaultList);

    const todos = useTodos();
    const lists = useLists(todos);
    return (
        <TodoContext.Provider
            value={{
                selectedList,
                setSelectedList,
                todos,
                lists,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContextProvider, TodoContext };