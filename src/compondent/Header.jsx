import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent page reload

        const searchQuery = searchTerm.toLowerCase();
        const sectionMap = {
            boys: "mens-section",
            girls: "girls-section",
            electric: "electric-section",
            grocery: "grocery-section",
            snacks: "snacks-section"
        };

        if (sectionMap[searchQuery]) {
            const section = document.getElementById(sectionMap[searchQuery]);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            alert("Section not found. Try 'boys', 'girls', 'electric', 'grocery', or 'snacks'.");
        }

        setSearchTerm(''); // Clear input after search
    };

    return (
        <Box className='head' position={'sticky'} top={0} width={'100%'} zIndex={1000}>
            <AppBar className='app-bar' position='sticky' elevation={20}>
                <Toolbar variant='dense'>
                    <img
                        style={{ width: '50px', height: '50px', borderRadius: '50%', padding: '10px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIiqSR07PiDNF91ymFCE7zQEqIHxshI1GeQ&s"
                        alt="logo"
                    />
                    <Typography variant='h6'>SHOP ZONE</Typography>
                    <Box className='nav-links'>
                        <Typography variant='body1' style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Home 
                        </Typography>
                        <Typography variant='body1'>Contact </Typography>
                        <Typography variant='body1' style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                            About
                        </Typography>

                        {/* Search Box */}
                        <Box component="form" className="form-container" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search Items..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    outline: 'none',
                                    fontSize: '14px',
                                    marginLeft: '10px'
                                }}
                            />
                            <button type="submit" style={{ marginLeft: '5px', cursor: 'pointer' }}>Go</button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
