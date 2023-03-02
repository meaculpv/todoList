import { React } from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

function Modal({children, showModal, setShowModal}) {
    return (
        showModal &&
        <Box sx={{position: "absolute", right: "50%", top: "50%"}}>{children}</Box>
    )
}

export default Modal