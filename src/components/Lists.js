import { Container, Divider, IconButton, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { React, useContext, useState } from "react";
import AddNewList from "./AddNewList";
import MyList from "./List";
import { TodoContext } from "./context";
import { useSpring, animated } from "react-spring";

function Lists() {
    // STATE
    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const editColor = edit ? "primary" : "";
    
    // CONTEXT
    const { lists } = useContext(TodoContext);

    // ANIMATION
    const spin = useSpring({
        transform: showMenu ? "rotate(0deg)" : "rotate(180deg)"
    });

    const menuAnimation = useSpring({
        display: showMenu ? "block" : "none",
    });   

    return (
        <Container className="Lists" sx={{p: 1,}}>
            <Box className="header" sx={{display: "flex", alignItems: "center"}}>
                <Box className="title" sx={{display: "flex", alignItems: "center", flex: 1}}>
                    <FormatListBulletedIcon />
                    <Typography sx={{ml: "5px", fontWeight: "bold", fontSize: "1.1rem"}}>Lists</Typography>
                </Box>
                <Box className="btns" sx={{display: "flex", alignItems: "center"}}>
                    {
                        showMenu && lists.length > 0 &&
                        <IconButton onClick={() => setEdit(edit => !edit)}> <EditIcon color={editColor} /> </IconButton>
                    }
                    <AddNewList />
                    <animated.div style={spin}><IconButton onClick={() => setShowMenu(!showMenu)} > <ExpandLessIcon /> </IconButton></animated.div>
                </Box>
            </Box>
            <animated.div style={menuAnimation}>
                <List className="lists">
                    {
                        lists.map((list) => 
                            <ListItem key={list.id}>
                                <ListItemButton sx={{"&:hover": {background: "#121212"}}} >
                                        <MyList 
                                            list={list}
                                            key={list.id}
                                            edit={edit}
                                        />
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                </List>
            </animated.div>
            <Divider />
        </Container>
    )

}

export default Lists