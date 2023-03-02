import { React } from "react";
import Todo from "./Todo";
import Next7Days from "./Next7Days";
import { Container, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Todos() {
    const selectedList = "Today";
    const todos = [
        {
            id : 'd54sd4',
            text : "Go for a run",
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
                <Typography variant="h5" sx={{mt: 2, pb: 1, pl: 1}}>{selectedList}</Typography>
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