import { React, useContext } from "react";
import Todo from "./Todo";
import Next7Days from "./Next7Days";
import { Divider, Paper, Typography, Stack } from "@mui/material";
import TodayIcon from '@mui/icons-material/Today';
import { Box } from "@mui/system";

import { TodoContext } from "./context/index";

function Todos() {
    const { selectedList } = useContext(TodoContext);

    const todos = [
        {
            id : 'd54sd4',
            text : "Go for a run",
            description: "Some description",
            time : "10:00 AM",
            date : "06/03/2021",
            day : "6",
            checked : true,
            color : '#00ff00',
            list : 'personal'
        },
        {
            id : 'd54fdf',
            text : "Meeting",
            description: "Save a periodt",
            time : "09:00 AM",
            date : "08/03/2021",
            day : "1",
            checked : false,
            color : '#00ff00',
            list : 'work'
        }
    ]

    return (
        <Paper
            elevation={0}
            className="Todos"
            sx={{
                width: "450px",
                height: "80%",
                position: "absolute",
                bottom: "40px",
                left: "40px",
                borderRadius: "12px",
                pb: 0.5, pr: 0.5, pl: 0.5
            }}
        >
            <Box
                className="selected-list"
            >
                <Stack direction="row">
                    <TodayIcon color="primary" fontSize="small" sx={{mt: 2.6, mb: 1, ml: 1}} />
                    <Typography variant="h6" sx={{mt: 2, pb: 2, pl: 1}}>{selectedList}</Typography>
                </Stack>
                <Divider />
            </Box>
            <Box className="todos" sx={{overflowX: "auto"}}>
                {
                    selectedList === "Next 7 Days" ?
                    <Next7Days todos={todos} />
                    :
                    todos.map(todo => 
                        <Todo todo={todo} key={todo.id} />)
                }
            </Box>
        </Paper>
    )

}

export default Todos