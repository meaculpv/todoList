import { Box, Chip, Divider, IconButton, Typography } from "@mui/material";
import { React, useContext, useState } from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantSharpIcon from '@mui/icons-material/LabelImportantSharp';
import SubTodo from "./SubTodo";
import { Stack } from "@mui/system";
import firebase from "./firebase";
import moment from "moment";
import { TodoContext } from "./context";

function Todo({todo}) {
    // STATE
    const [hover, setHover] = useState(false);

    // CONTEXT
    const { selectedTodo, setSelectedTodo } = useContext(TodoContext);

    const handleDelete = todo => {
        deleteTodo(todo);

        if (selectedTodo === todo) {
            setSelectedTodo(undefined);
        }
    }

    const deleteTodo = todo => {
        firebase
            .firestore()
            .collection("todos")
            .doc(todo.id)
            .delete()
    };

    const checkTodo = todo => {
        firebase
            .firestore()
            .collection("todos")
            .doc(todo.id)
            .update({
                checked : !todo.checked
            })
    }

    const repeatNextDay = todo => {
        const nextDayDate = moment(todo.date, "MM/DD/YYYY").add(1, "days");

        const repeatedTodo = {
            ...todo,
            checked: false,
            date: nextDayDate.format("MM/DD/YYYY"),
            day: nextDayDate.format("d")
        }

        delete repeatedTodo.id;

        firebase
            .firestore()
            .collection("todos")
            .add(repeatedTodo)
    }

    return (
        <Box
            className="Todo"
            sx={{
                pt: 0.5, pb: 1,
            }}
        >
            <Box
                className="todoContainer"
                onMouseEnter={() => {setHover(true)}}
                onMouseLeave={() => {setHover(false)}}
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >

                <Box
                    className="text"
                    sx={{
                        position: "relative",
                        flex: 1, 
                        mb: "10px", pl: "10px",
                        cursor: "pointer"
                    }}
                    onClick={() => {setSelectedTodo(todo)}}
                >
                    <Typography variant="body1" sx={todo.checked ? {color: "#ffffff80"} : {}}>{todo.text}</Typography>
                    <Stack direction="row">
                        {
                            todo.checked ?
                            <Chip icon={<AccessTimeIcon />} size="small" variant="outlined" label={todo.time} sx={{ml: "10px", mt: "6px"}} disabled />
                            :
                            <Chip icon={<AccessTimeIcon />} size="small" color="error" variant="outlined" label={todo.time} sx={{ml: "10px", mt: "6px"}} />
                        }
                        {
                            todo.checked ?
                            <Chip icon={<LabelImportantSharpIcon />} label="!!" size="small" color="warning" variant="outlined" sx={{ml: "10px", mt: "6px"}} />
                            :
                            <Chip icon={<LabelImportantSharpIcon />} label="!!!" size="small" color="warning" variant="outlined" sx={{ml: "10px", mt: "6px"}} />
                        }
                    </Stack>
                    <Box 
                        sx={todo.checked ?
                            {height: "2px", background: "#252525", position: "absolute", top: "18%", width: "90%", transition: "width 250ms ease-in-out"}
                            : 
                            {height: "2px", background: "#252525", position: "absolute", top: "18%", width: 0}
                        }
                    >
                    </Box>
                </Box>
                <Box className="checkTodo" onClick={() => checkTodo(todo)}>
                    {
                        todo.checked ?
                        <IconButton color="primary"> <CheckBoxIcon fontSize="small" /> </IconButton>
                        :
                        <IconButton> <CheckBoxOutlineBlankIcon fontSize="small" /> </IconButton>
                    }
                </Box>
                    <Box className="addToNextDay" component="span" onClick={() => repeatNextDay(todo)}>
                        {
                            todo.checked &&
                            <IconButton> <UpdateIcon fontSize="small" /> </IconButton>
                        }
                    </Box>
                    <Box className="deleteTodo" component="span" onClick={() => handleDelete(todo)}>
                        {
                            (hover || todo.checked) &&
                            <IconButton> <DeleteIcon fontSize="small" /> </IconButton>
                        }
                    </Box>
            </Box>
            <Divider sx={{width: 340, mt: "6px", mb: "6px"}} variant="inset" />
        </Box>
    )

}

export default Todo