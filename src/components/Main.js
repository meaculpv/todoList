import { Box } from "@mui/system";
import { React } from "react";

function Main({ children }) {
    
    return (
        <div className="Main">
            <Box> {children}</Box>
        </div>
    )

}

export default Main