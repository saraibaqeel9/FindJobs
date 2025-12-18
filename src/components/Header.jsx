import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,
    InputBase,
    Avatar,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Container,
} from "@mui/material";

import {
    Menu as MenuIcon,
    Search as SearchIcon,
} from "@mui/icons-material";
import { Images } from "../assets/images";
import Colors from "../assets/style/Colors";

const navItems = [
    "Find Jobs",
    "Top Companies",
    "Job Tracker",
    "My Calendar",
    "Documents",
    "Messages",
    "Notifications",
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    return (
        <>

            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: "#fff",
                    color: "#1f2937",
                }}
            >
                <Container maxWidth={'xl'} sx={{ px: '0px !important' }}>
                    <Toolbar >

                        


                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Box
                                component="img"
                                src={Images.logo}
                                alt="logo"
                                sx={{ height: 32 }}
                            />
                        </Box>


                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "none",
                                    lg: "flex",
                                    xl:'flex'
                                },
                                gap: 2.5,
                                ml: 2,
                            }}
                        >
                            {navItems.map((item) => (
                                <Typography
                                    key={item}
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: item == 'Find Jobs' ? 550 : 500,
                                        cursor: "pointer",

                                        color: item == 'Find Jobs' ? "#2563eb" : '#737A91',
                                        fontFamily: "Neue Haas Display",
                                        "&:hover": { color: "#2563eb" },
                                    }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>


                        <Box sx={{ flexGrow: 1 }} />


                        <Box
                            sx={{
                                display: { xs: "none", lg: "flex",xl:'flex' },
                                alignItems: "center",
                                backgroundColor: "#F6F9FF",
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 2,
                                width: { xs: 220, lg: 150,xl:220 },
                            }}
                        >
                            <Box component="img" src={Images.searchicon} width="15px" />
                &nbsp;
                            <InputBase
                                placeholder="Search"
                                sx={{ ml: 1, fontSize: 14, width: "100%" }}
                            />
                        </Box>


                        <Button
                            variant="contained"
                            sx={{
                                ml: 2,
                                textTransform: "none",
                                borderRadius: '8px',
                                fontSize: 13,
                                boxShadow: 'none !important',
                                backgroundColor: Colors.ButtonBg,
                                display: { xs: "none", lg: "flex",xl:'flex' },
                            }}
                        >
                            Resume Builder
                        </Button>

                        {/* Avatar */}
                        <Avatar
                            sx={{
                                ml: 2,
                                width: 32,
                                height: 32,
                                cursor: "pointer",
                            }}
                            src={Images.avatar}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <IconButton
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { lg: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar >


            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 260,
                    },
                }}
            >
                <Box sx={{ p: 2 }}>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#f3f4f6",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            mb: 2,
                        }}
                    >
                        <SearchIcon sx={{ fontSize: 18 }} />
                        <InputBase
                            placeholder="Search"
                            sx={{ ml: 1, fontSize: 14 }}
                        />
                    </Box>

                    <Divider />


                    <List>
                        {navItems.map((item) => (
                            <ListItem button key={item}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 2,
                            textTransform: "none",
                            borderRadius: 2,
                            backgroundColor: "#2563eb",
                        }}
                    >
                        Resume Builder
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
