import { Box, Typography, Divider, Paper, Stack } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { React, useContext, useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { TodoContext } from "./context";
import moment from "moment";
import firebase from "./firebase";


function EditTodo() {
    // CONTEXT
    const { selectedTodo, lists, selectedPriority } = useContext(TodoContext);

    // STATE
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [todoList, setTodoList] = useState('')
    const [priority, setPriority] = useState(selectedPriority)


    useEffect(() => {
        if (selectedTodo) {
            setText(selectedTodo.text)
            setDay(moment(selectedTodo.date, "MM/DD/YYYY"))
            setTime(moment(selectedTodo.time, "hh:mm A"))
            setTodoList(selectedTodo.listName)
        }
    }, [selectedTodo]);

    useEffect(() => {
        if (selectedTodo) {
            firebase
                .firestore()
                .collection("todos")
                .doc(selectedTodo.id)
                .update({
                    text,
                    date: moment(day).format("MM/DD/YYYY"),
                    day: moment(day).format("d"),
                    time: moment(time).format("hh:mm A"),
                    listName: todoList
                })
        }
    }, [text, day, time, todoList])

    const handleSubmit = (e) => {

    }

    return (
        <Box>
            {
                selectedTodo &&
                <Paper 
                    className="EditTodo"
                    elevation={0}
                    sx={{
                        width: "450px",
                        height: "80%",
                        position: "absolute",
                        bottom: "40px",
                        left: "calc(40px + 450px + 40px)",
                        borderRadius: "12px",
                        pb: 0.5, pr: 0.5, pl: 0.5
                    }}
                >
                    <Box
                        className="editTodo"
                    >
                        <Stack direction="row">
                            <EditIcon color="primary" fontSize="small" sx={{mt: 2.6, mb: 1, ml: 1}} />
                            <Typography variant="h6" sx={{mt: 2, pb: 2, pl: 1}}>Edit Todo</Typography>
                        </Stack>
                        <Divider />
                    </Box>
                    <Box className="todo" sx={{overflowX: "auto"}}>
                        <TodoForm 
                            handleSubmit={handleSubmit}
                            text={text}
                            setText={setText}
                            day={day}
                            setDay={setDay}
                            time={time}
                            todoList={todoList}
                            setTodoList={setTodoList}
                            setTime={setTime}
                            priority={priority}
                            setPriority={setPriority}
                            lists={lists}
                        />
                    </Box>
                </Paper>
            }
        </Box>

    )

}

export default EditTodo