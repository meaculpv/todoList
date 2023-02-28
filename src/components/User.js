import { Avatar, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { React } from "react";
import avatar from "./assets/avatar.png"

function User() {
    
    return (
        <div className="User">
            <Box
                sx={{
                    borderBottom: 1,
                    display: 'flex',
                    justifyContent: 'space-around',
                    borderColor: 'primary.main',
                    alignItems: 'center',
                }}
            >
                <Avatar
                className="avatar"
                alt="user-avatar" 
                src={avatar} 
                sx={{
                    width: 56,
                    height: 56,
                }} />
                <Box
                >
                    <Typography
                        variant="h6"
                    >
                        Eoin Duke
                    </Typography>
                    <Link
                        href="#"
                        sx={{
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                    >Logout</Link>
                </Box>
            </Box>
        </div>
    )

}

export default User