import { Container, Box, Typography, Divider, IconButton, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { React, useContext, useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { calendarItems } from './constants';
import { TodoContext } from "./context/index";
import { useSpring, animated } from "react-spring";

function Calendar() {
    // STATE
    const [showMenu, setShowMenu] = useState(true);

    // CONTEXT
    const { setSelectedList } = useContext(TodoContext);

    // ANIMATION
    const spin = useSpring({
        transform: showMenu ? "rotate(0deg)" : "rotate(180deg)"
    });

    const menuAnimation = useSpring({
        display: showMenu ? "block" : "none",
    });

    return (
        <Container className="Calendar" sx={{p: 1,}}>
            <Box className="header" sx={{display: "flex", alignItems: "center"}}>
                <Box className="title" sx={{display: "flex", alignItems: "center", flex: 1}}>
                    <CalendarMonthIcon />
                    <Typography sx={{ml: "5px", fontSize: "1.1rem", fontWeight: "bold"}}>Calendar</Typography>
                </Box>
                <animated.div style={spin} className="btns">
                    <IconButton 
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <ExpandLessIcon />
                    </IconButton>
                </animated.div>

            </Box>
            <animated.div style={menuAnimation}>
                <List className="items" sx={{p: 0.5}}>
                    {
                    calendarItems.map((item, index) => 
                    <ListItem key={index} disablePadding sx={{p: 0.25, m: "5px"}}>
                        <ListItemButton onClick={() => setSelectedList(item)}>
                            <ListItemText primary={item} sx={{textTransform: "capitalize"}} />
                        </ListItemButton>
                    </ListItem>)
                    }
                </List>
            </animated.div>
            <Divider />
        </Container>
    )

}

export default Calendar