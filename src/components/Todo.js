import { Box, Chip, Divider, IconButton, Typography } from "@mui/material";
import { React, useState } from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertCommentSharpIcon from '@mui/icons-material/InsertCommentSharp';
import LabelImportantSharpIcon from '@mui/icons-material/LabelImportantSharp';
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

                <Box className="text" sx={{position: "relative", flex: 1, mb: "10px", pl: "10px"}}>
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
                <Box className="checkTodo">
                    {
                        todo.checked ?
                        <IconButton color="primary"> <CheckBoxIcon fontSize="small" /> </IconButton>
                        :
                        <IconButton> <CheckBoxOutlineBlankIcon fontSize="small" /> </IconButton>
                    }
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
            <Divider sx={{width: 340, mt: "6px", mb: "6px"}} variant="inset" />
        </Box>
    )

}

export default Todo