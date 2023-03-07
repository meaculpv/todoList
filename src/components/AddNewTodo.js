import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, } from "@mui/material";
import { Box, Container } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import { React, useContext, useEffect, useState } from "react";
import moment from "moment/moment";

// Imports from project
import { TodoContext } from "./context";
import TodoForm from "./TodoForm";
import Modal from "./Modal";
import { calendarItems } from "./constants";
import firebase from "./firebase";

function AddNewTodo() {
    // CONTEXT
    const { lists, selectedList, selectedPriority } = useContext(TodoContext);

    // STATE
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [todoList, setTodoList] = useState(selectedList)
    const [priority, setPriority] = useState(selectedPriority)

    
    function handleSubmit(e) {
        e.preventDefault();
        console.log("H!2");

        if ( text && !calendarItems.includes(todoList) ) {
            console.log("Hi");
            firebase
                .firestore()
                .collection("todos")
                .add(
                    {
                        text: text,
                        date: moment(day).format("MM/DD/YYYY"),
                        day: moment(day).format("d"),
                        time: moment(time).format("hh:mm A"),
                        checked: false,
                        priority: priority,
                        listName: todoList,
                    }
                );

            setShowModal(false);
            setText('');
            setDay(new Date());
            setTime(new Date());
        }
    }


    const handleClose = () => {
        setShowModal(false)
    }
    
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
                <Dialog open={showModal} onClose={handleClose}>
                    <DialogTitle>Add new to do <IconButton onClick={handleClose} sx={{position:"absolute", right: 8, top: 8}}> <CloseIcon /></IconButton></DialogTitle>
                    <DialogContent>
                        <TodoForm 
                            text={text}
                            setText={setText}
                            day={day}
                            setDay={setDay}
                            time={time}
                            setTime={setTime}
                            todoList={todoList}
                            setTodoList={setTodoList}
                            priority={priority}
                            setPriority={setPriority}
                            lists={lists}
                            setShowModal={setShowModal}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={(e) => {
                            setShowModal(false)
                            handleSubmit(e)
                            }} variant="contained" sx={{width: "100%",}}>Add New Todo</Button>
                    </DialogActions>
                </Dialog>
            </Modal>
            <Divider />
        </Container>
    )

}

export default AddNewTodo