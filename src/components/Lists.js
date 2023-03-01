import { Container, Divider, IconButton, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { React, useState } from "react";
import AddNewList from "./AddNewList";
import MyList from "./List";

function Lists() {
    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const editColor = edit ? "primary" : "";
    const lists = [
        {id: 1, name: "Personal", numOfTodos: 0},
        {id: 2, name: "Work", numOfTodos: 2},
        {id: 3, name: "Hobby", numOfTodos: 1},
    ];
    
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
                    <IconButton> <ExpandLessIcon /> </IconButton>
                </Box>
            </Box>
            <List className="lists">
                {
                    lists.map(list => 
                        <ListItem>
                            <ListItemButton>
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
            <Divider />
        </Container>
    )

}

export default Lists