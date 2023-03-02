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

export function useLists(todos) {
    const [lists, setLists] = useState([]);

    function calculateNumOfTodos(listName, todos) {
        return todos.filter( todo => todo.listName === listName).length;
    }

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection("lists")
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( docs => {
                const listName = docs.data().name;

                return {
                    id: docs.id,
                    name: listName,
                    numOfTodos: calculateNumOfTodos(listName, todos),
                };
            });
            setLists(data);
        });

        return () => unsubscribe();
    }, []);

    return lists;
}