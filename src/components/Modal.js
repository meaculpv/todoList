import { React } from "react";
import { Container } from "@mui/system";

function Modal({children, showModal, setShowModal}) {
    return (
        showModal &&
        <Container sx={{position: "absolute", right: "50%", top: "50%"}}>{children}</Container>
    )
}

export default Modal