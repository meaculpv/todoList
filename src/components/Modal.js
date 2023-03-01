import { React, useRef } from "react";
import { Container } from "@mui/system";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";

function Modal({children, showModal, setShowModal}) {
    const modalRef = useRef()

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        showModal &&
        <Container>{children}</Container>
    )
}

export default Modal