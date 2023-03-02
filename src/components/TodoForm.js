import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { React } from "react";

function TodoForm({
    handleSubmit,
    text, setText,
    day, setDay,
    time, setTime,
    todoList, setTodoList,
    lists,
    setShowModal = false
}) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <FormControl className="TodoForm" onSubmit={handleSubmit} sx={{padding: 1, width: "100%", borderRadius: 4}}>
                <TextField 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="To do ..."
                    autoFocus
                    fullWidth
                    sx={{paddingBottom: 3,}}
                />
                <Box className="remind" sx={{display: "flex", alignItems: "center", padding: 0.5}}>
                    <NotificationAddIcon />
                    <Typography variant="bodyText" sx={{marginLeft: "10px"}}>Remind me</Typography>
                </Box>
                <Box className="pick-day" sx={{pt: 1.5, pl: 1.5, pr: 1.5,}}>
                    <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                        <CalendarMonthIcon />
                        <Typography sx={{ml: "10px"}}>Choose a day</Typography>
                    </Box>
                    <DatePicker
                        value={day}
                        onChange={(e) => {
                            setDay(e)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <Box className="pick-time" sx={{p: 1.5}}>
                    <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                        <AccessTimeIcon />
                        <Typography sx={{ml: "10px"}}>Choose a time</Typography>
                    </Box>
                    <TimePicker 
                        value={time}
                        onChange={(e) => {setTime(e)}}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <Box className="pick-list" sx={{p: 0.5}}>
                    <Box sx={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                        <FormatListBulletedIcon />
                        <Typography sx={{ml: "10px"}}>Choose a list</Typography>
                    </Box>
                    <Stack direction="row" sx={{display: "flex", pt: 1, pl: 1, pr: 1, flexWrap: "wrap"}}>
                        {
                            lists.length > 0 ?
                            lists.map(list =>
                                <Chip
                                    key={list.id}
                                    color="primary"
                                    label={list.name}
                                    variant={todoList === list.name ? "" : "outlined"}
                                    onClick={() => setTodoList(list.name)}
                                    sx={{ml: 1, mt: 1}} 
                                />
                            )
                            :
                            <Typography variant="body2" color="error">Create a list before proceeding</Typography>
                        }
                    </Stack>
                </Box>
            </FormControl>
        </LocalizationProvider>
    )

}

export default TodoForm