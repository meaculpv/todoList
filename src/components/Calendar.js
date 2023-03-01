import { Container, Box, Typography, Divider, IconButton, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { React } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { calendarItems } from './constants';

function Calendar() {

    return (
        <Container className="Calendar" sx={{p: 1,}}>
            <Box className="header" sx={{display: "flex", alignItems: "center"}}>
                <Box className="title" sx={{display: "flex", alignItems: "center", flex: 1}}>
                    <CalendarMonthIcon />
                    <Typography sx={{ml: "5px", fontSize: "1.1rem", fontWeight: "bold"}}>Calendar</Typography>
                </Box>
                <IconButton className="btns">
                    <ExpandLessIcon />
                </IconButton>
            </Box>
            <List className="items" sx={{p: 0.5}}>
                {
                calendarItems.map((item, index) => 
                <ListItem key={index} disablePadding sx={{p: 0.25, m: "5px"}}>
                    <ListItemButton>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>)
                }
            </List>
            <Divider />
        </Container>
    )

}

export default Calendar