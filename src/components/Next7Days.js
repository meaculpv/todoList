import moment from "moment/moment";
import { React, useEffect, useState } from "react";

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
        <div className="Next7Days">
            Next7Days
        </div>
    )

}

export default Next7Days