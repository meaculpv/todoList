import { Box, Typography, Divider, Paper, Stack } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { React, useState } from "react";
import TodoForm from "./TodoForm";


function EditTodo() {
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())

    const handleSubmit = (e) => {

    }

    const lists = [
        {id: 1, name: "Personal", numOfTodos: 0},
        {id: 2, name: "Work", numOfTodos: 2},
        {id: 3, name: "Hobby", numOfTodos: 1},
    ];

    return (
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
                    setTime={setTime}
                    lists={lists}
                />
            </Box>
        </Paper>
    )

}

export default EditTodo