import { Alert, Container } from "@mui/material";
import { React, useContext, useState } from "react";
import ListForm from './ListForm';
import firebase from "./firebase";
import { TodoContext } from "./context";

function RenameList({list, setShowModal, showModal}) {
    // STATE
    const [newListName, setNewListName] = useState(list.name);

    // CONTEXT
    const { selectedList, setSelectedList } = useContext(TodoContext);

    const renameList = (list, newListName) => {
        const listRef = firebase.firestore().collection('lists');
        const todosRef = firebase.firestore().collection('todos');

        const { name : oldListName } = list;

        listRef
            .where("name", "==", newListName)
            .get()
            .then(querySelector => {
                if (!querySelector.empty) {
                    <Alert severity="error">List with the same name already exists!</Alert>
                } else {
                    listRef
                        .doc(list.id)
                        .update({
                            name: newListName
                        })
                        .then(() => {
                            todosRef
                                .where("listName", "==", oldListName)
                                .get()
                                .then(querySnapshot => {
                                    querySnapshot.forEach(doc => {
                                        doc.ref.update({
                                            listName: newListName
                                        })
                                    })
                                })
                                .then(() => {
                                    if (selectedList === oldListName) {
                                        setSelectedList(newListName)
                                    }
                                })
                        })
                }
            })
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        renameList(list, newListName)

        setShowModal(false)
    };

    return (
        <Container className="RenameList">
            <ListForm 
                handleSubmit={handleSubmit}
                heading='Edit List name'
                value={newListName}
                setValue={setNewListName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm'
                showModal={showModal}
            />
        </Container>
        
    )

}

export default RenameList