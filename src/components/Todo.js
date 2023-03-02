import { Box, IconButton, Typography } from "@mui/material";
import { React, useState } from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import SubTodo from "./SubTodo";
import { Stack } from "@mui/system";

function Todo({todo}) {
    const [hover, setHover] = useState(false)

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
                <Box className="checkTodo">
                    {
                        todo.checked ?
                        <IconButton> <CheckBoxIcon fontSize="small" color="primary" /> </IconButton>
                        :
                        <IconButton> <CheckBoxOutlineBlankIcon fontSize="small" /> </IconButton>
                    }
                </Box>
                <Box className="text" sx={{position: "relative", flex: 1, mb: "10px"}}>
                        <Typography variant="body1" sx={todo.checked ? {color: "#ffffff80"} : {}}>{todo.text}</Typography>
                        <Typography variant="body2">{todo.time} - {todo.list}</Typography>
                    <Box 
                        sx={todo.checked ?
                            {height: "1px", background: "#252525", position: "absolute", top: "23%", width: "90%", transition: "width 250ms ease-in-out"}
                            : 
                            {height: "1px", background: "#252525", position: "absolute", top: "23%", width: 0}
                        }
                    >
                    </Box>
                </Box>
                    <Box className="addToNextDay" component="span">
                        {
                            todo.checked &&
                            <IconButton> <UpdateIcon fontSize="small" /> </IconButton>
                        }
                    </Box>
                    <Box className="deleteTodo" component="span">
                        {
                            (hover || todo.checked) &&
                            <IconButton> <DeleteIcon fontSize="small" /> </IconButton>
                        }
                    </Box>
            </Box>
        </Box>
    )

}

export default Todo