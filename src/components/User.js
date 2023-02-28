import { Avatar, Container, Divider, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { React } from "react";
import avatar from "./assets/avatar.png"

function User() {
    
    return (
        <Container className="User" sx={{borderBottom: 1,}}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingBottom: 3,
                    paddingTop: 1,
                }}
            >
                {/* User's profile photo */}
                <Avatar
                className="avatar"
                alt="user-avatar" 
                src={avatar} 
                sx={{
                    width: 56,
                    height: 56,
                }} />
                {/* User's info */}
                <Box className="info">
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
        </Container>
    )

}

export default User