import { Box, Button, IconButton, ListItem, ListItemButton, ListItemText } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { React, useContext, useState } from "react";
import RenameList from "./RenameList";
import Modal from "./Modal";
import { TodoContext } from "./context";
import firebase from "./firebase";

function List({list, edit}) {
    // CONTEXT
    const { defaultList, selectedList, setSelectedList } = useContext(TodoContext)

    // STATE
    const [showModal, setShowModal] = useState(false);

    const deleteList = list => {
        firebase
            .firestore()
            .collection("lists")
            .doc(list.id)
            .delete()
            .then(() => {
                firebase
                    .firestore()
                    .collection("todos")
                    .where("listName", "==", list.name)
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach(doc => {
                            doc.ref.delete()
                        })
                    })
            })
            .then(() => {
                if (selectedList === list.name) {
                    setSelectedList(defaultList)
                }
            })
    }

    return (
        <Box className="List" sx={{display: "flex", alignItems: "center", p: 0.25, m: "5px", position: "relative", width: "100%"}} 
        
            onClick={() => setSelectedList(list.name)}
        >
            <Box
                className="name"
                sx={{
                    cursor: "pointer",
                    wordBreak: "break-all",
                    ml: "-7px", 
                    textTransform: "capitalize",
                    "&:hover": {
                        background: "#252525"
                    }
                }}
            >
                {list.name}
            </Box>
            <Box className="btns" sx={{display: "flex", alignItems: "center"}}>
                {
                edit ?
                <Box
                sx={{
                    position: "absolute", 
                    right: 0, 
                    width: "25px", 
                    height: "25px", 
                    fontSize: "0.9rem", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center"
                }}>
                    <IconButton onClick={() => setShowModal(true)}> <EditIcon fontSize="small" /> </IconButton>
                    <IconButton onClick={() => deleteList(list)}> <DeleteIcon fontSize="small" /> </IconButton>
                </Box>
                :
                list.numOfTodos === 0 ? "" :
                <Box 
                size="small"
                sx={{
                    position: "absolute", 
                    right: 0, 
                    width: "25px", 
                    height: "25px", 
                    fontSize: "0.9rem", 
                    background: "#616161", 
                    borderRadius: "50%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center"
                }}> {list.numOfTodos} </Box>
                }
            </Box>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameList 
                    list={list}
                    setShowModal={setShowModal}
                    showModal={showModal}
                />
            </Modal>
        </Box>
    )

}

export default List