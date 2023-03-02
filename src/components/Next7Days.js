import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import moment from "moment/moment";
import { React, useEffect, useState } from "react";
import Todo from "./Todo";

function Next7Days({todos}) {
    const [weekTodos, setWeekTodos] = useState([]);
    
    useEffect(() => {
        const days = ['0', '1', '2', '3', '4', '5', '6'];

        const sortedTodosByDay = days.map(day => {
            return {
                todos: todos.filter( todo => todo.day === day),
                number: day
            }
        })

        const today = parseInt(moment().format('d'));
        const arrangeDays = sortedTodosByDay.slice(today).concat(sortedTodosByDay.slice(0, today));

        setWeekTodos(arrangeDays);
    }, [todos]);

    return (
        <Box className="Next7Days" sx={{m: 1}}>
            {
                weekTodos.map(day => 
                    <Box key={day.number}>
                        <Stack direction="row" className="day" sx={{pt: 1, pb: 1, pl: 0.5}}>
                            <Box className="name">
                                <Typography variant="body1" fontWeight="bold"> {moment(day.number, "d").format("dddd")} {day.number === moment().format("d") && " (Today)"} </Typography>
                            </Box>
                            <Box className="total-todos">
                                <Typography variant="body1" sx={{pl: 1}}> ({day.todos.length}) </Typography>
                            </Box>
                        </Stack>
                        <Box className="todos">
                            {
                                day.todos.map(todo =>
                                    <Todo key={todo.id} todo={todo} />    
                                )
                            }
                        </Box>
                    </Box>
                )
            }
        </Box>
    )

}

export default Next7Days