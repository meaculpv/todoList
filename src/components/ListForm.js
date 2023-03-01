import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { React } from "react";

function ListForm({handleSubmit, heading, value, setValue, setShowModal, confirmButtonText, showModal}) {
    return (
        <Container>
            <FormControl onSubmit={handleSubmit}>
                <Dialog open={showModal} onClose={() => setShowModal(false)}>
                    <DialogTitle>{heading}</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder='List name...'
                        />
                    </DialogContent>
                    <DialogActions sx={{pb: 2,}}>
                        <Button variant="contained" onClick={() => setShowModal(false)}>{confirmButtonText}</Button>
                        <Button onClick={() => setShowModal(false)}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </FormControl>
        </Container>
    )
}

export default ListForm