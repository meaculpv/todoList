import { Container, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { React } from "react";

function Main({ children }) {
    
    return (
        <Paper elevation={1} className="Main" sx={{width: "100%", height: "965px", position: "relative"}}>
            <Box> {children}</Box>
        </Paper>
    )

}

export default Main