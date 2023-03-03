import { Drawer, List } from "@mui/material";
import { React, useContext, useEffect, useRef } from "react";
import { TodoContext } from "./context";

const drawerWidth = 280;

function Header({ children }) {
    // CONTEXT
    const { setSelectedTodo } = useContext(TodoContext);

    const sidebarRef = useRef();
    
    useEffect(() => {
        document.addEventListener("click", handleClick)

        return () => document.removeEventListener("click", handleClick)
    });

    const handleClick = e => {
        if (e.target === sidebarRef.current || sidebarRef.current.contains(e.target)) {
            setSelectedTodo(undefined);
        }
    }

    return (
        <Drawer 
        className="Sidebar"
        ref={sidebarRef}
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }}
        variant="permanent"
        anchor="left">
            <List>
                {children}
            </List> 
        </Drawer>
    )

}

export default Header