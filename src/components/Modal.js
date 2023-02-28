import { React, useRef } from "react";
import { Container } from "@mui/system";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function Modal({children, showModal, setShowModal}) {
    const modalRef = useRef()

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        showModal &&
                <Dialog open={showModal} onClose={closeModal}>
                    {children}
                    <DialogContent>
                        <DialogContentText>
                            sadasd
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeModal}>Cancel</Button>
                    </DialogActions> 
                </Dialog> 
    )
}

export default Modal