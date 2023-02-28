import { Button, DialogTitle } from "@mui/material";
import { Box, Container } from "@mui/system";
import { React, useState } from "react";
import Modal from "./Modal";

function AddNewTodo() {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <Container className="AddNewTodo" sx={{borderBottom: 1,}}>
            <Box sx={{paddingTop: 3, paddingBottom: 3,}}>
                <Button
                variant="contained" 
                sx={{
                    width: "100%",
                    height: "100%",
                    fontWeight: 'bold',
                }}
                onClick={() => setShowModal(true)}
                >
                    + New Todo
                </Button>
            </Box>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <DialogTitle>
                    Hello World
                </DialogTitle>
            </Modal>
        </Container>
    )

}

export default AddNewTodo