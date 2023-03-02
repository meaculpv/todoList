import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { React, useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
import { TodoContext } from "./context";

function AddNewTodo() {
    // CONTEXT
    const { selectedList } = useContext(TodoContext);

    // STATE
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [todoList, setTodoList] = useState(selectedList)


    const handleClickOpen = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) => {

    }

    const lists = [
        {id: 1, name: "Personal", numOfTodos: 0},
        {id: 2, name: "Work", numOfTodos: 2},
        {id: 3, name: "Hobby", numOfTodos: 1},
    ];

    useEffect(() => {
        setTodoList(selectedList);
    }, [selectedList])

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
                        <TodoForm 
                            handleSubmit={handleSubmit}
                            text={text}
                            setText={setText}
                            day={day}
                            setDay={setDay}
                            time={time}
                            setTime={setTime}
                            todoList={todoList}
                            setTodoList={setTodoList}
                            lists={lists}
                            setShowModal={setShowModal}
                        />
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