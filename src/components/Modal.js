import { React } from "react";
import { Container } from "@mui/system";

function Modal({children, showModal, setShowModal}) {
    return (
        showModal &&
        <Container>{children}</Container>
    )
}

export default Modal