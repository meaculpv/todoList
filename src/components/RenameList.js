import { Container } from "@mui/material";
import { React, useState } from "react";
import ListForm from './ListForm';

function RenameList({list, setShowModal, showModal}) {
    const [newListName, setNewListName] = useState(list.name);

    const handleSubmit = (e) => {

    }

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