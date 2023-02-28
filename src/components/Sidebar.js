import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { React } from "react";

const drawerWidth = 280;

function Header({ children }) {
    
    return (
        <Drawer 
        className="Sidebar" 
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }}
        variant="permanent"
        anchor="left"
        >
            <List>
                {children}
            </List> 
        </Drawer>
    )

}

export default Header