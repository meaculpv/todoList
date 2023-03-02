import React, { createContext, useState } from "react";

const TodoContext = createContext();

function TodoContextProvider({children}) {
    const defaultList = "today"
    const [selectedList, setSelectedList] = useState(defaultList)


    return (
        <TodoContext.Provider
            value={{
                selectedList,
                setSelectedList
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext };