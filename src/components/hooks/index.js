import moment from "moment";
import { useState, useEffect } from "react";
import firebase from "../firebase";

export function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection("todos")
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( docs => {
                return {
                    id: docs.id,
                    ...docs.data(),
                };
            });
            setTodos(data);
        });

        return () => unsubscribe();
    }, []);

    return todos;
}

export function useLists() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection("lists")
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( docs => {
                return {
                    id: docs.id,
                    name: docs.data().name,
                };
            });
            setLists(data);
        });

        return () => unsubscribe();
    }, []);

    return lists;
}

export function useListsWithStats(lists, todos) {
    const [listsWithStats, setListsWithStats] = useState([]);

    useEffect(() => {
        const data = lists.map((list) => {
            return {
                numOfTodos: todos.filter(todo => todo.listName === list.name && !todo.checked).length,
                ...list,
            }
        });
        setListsWithStats(data);
    });

    return listsWithStats;
}

export function useFilterTodos(todos, selectedList) {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        let data;
        const todayDateFormated = moment().format("MM/DD/YYYY");

        if(selectedList === "today") {
            data = todos.filter(todo => todo.date === todayDateFormated);
        } else if (selectedList === "next 7 days") {
            data = todos.filter(todo => {
                const todoDate = moment(todo.date, "MM/DD/YYYY");
                const todayDate = moment(todayDateFormated, "MM/DD/YYYY");

                const diffDays = todoDate.diff(todayDate, "days");

                return diffDays >=0 && diffDays < 7;
            });
        } else if (selectedList === "all days") {
            data = todos;
        } else {
            data = todos.filter(todo => todo.listName === selectedList);
        }

        setFilteredTodos(data);
    }, [todos, selectedList]);

    return filteredTodos;
}