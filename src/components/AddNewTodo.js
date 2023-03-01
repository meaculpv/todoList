import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { React, useState } from "react";
import Modal from "./Modal";

function AddNewTodo() {
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())

    const handleClickOpen = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <Container className="AddNewTodo" sx={{}}>
            <Box sx={{paddingTop: 3, paddingBottom: 3,}}>
                <Button
                variant="contained" 
                sx={{
                    width: "100%",
                    height: "100%",
                    fontWeight: 'bold',
                }}
                onClick={() => setShowModal(true)}
                >
                    + New Todo
                </Button>
            </Box>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <Dialog open={handleClickOpen} onClose={handleClose}>
                    <DialogTitle>Add new to do <IconButton onClick={handleClose} sx={{position:"absolute", right: 8, top: 8}}> <CloseIcon /></IconButton></DialogTitle>
                    <DialogContent>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <FormControl sx={{padding: 1, width: "500px", borderRadius: 4}}>
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
                                    <Stack direction="row" spacing={1} sx={{display: "flex", pt: 1, pl: 1, pr: 1, flexWrap: "wrap"}}>
                                        <Chip label="Personal" color="primary" variant="outlined" onClick={() => {}} />
                                        <Chip label="Work" variant="outlined" onClick={() => {}} />
                                        <Chip label="Hobby" variant="outlined" onClick={() => {}} />
                                    </Stack>
                                </Box>
                            </FormControl>
                        </LocalizationProvider>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained" sx={{width: "100%",}}>Add New Todo</Button>
                    </DialogActions>
                </Dialog>
            </Modal>
            <Divider />
        </Container>
    )

}

export default AddNewTodo