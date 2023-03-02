import { Container, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { React, useState } from "react";
import { Box } from "@mui/system";
import Modal from "./Modal";
import ListForm from "./ListForm";
import firebase from "./firebase";

function AddNewList() {
    const [showModal, setShowModal] = useState(false);
    const [listName, setListName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(listName) {
            const listRef = firebase.firestore()
                .collection("lists");
            
            listRef.where("name", "==", listName).get()
            .then( querySnapshot => {
                if(querySnapshot.empty) {
                    listRef.add(
                        {
                            name : listName,
                        }
                    )
                } else {
                    alert("List already exists!")
                }
            });
            
            setShowModal(false)
            setListName("")
        }
    }

    return (
        <Box className="AddNewList">
            <Box sx={{position: "relative"}}>
                <IconButton onClick={() => setShowModal(true)}> <AddIcon /> </IconButton>
            </Box>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ListForm 
                    handleSubmit={handleSubmit}
                    heading='New List'
                    value={listName}
                    setValue={setListName}
                    setShowModal={setShowModal}
                    confirmButtonText='Add New List'
                    showModal={showModal}
                />
            </Modal>
        </Box>
    )
}

export default AddNewList