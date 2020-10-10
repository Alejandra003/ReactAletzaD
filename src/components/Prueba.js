import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header_n">
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
      </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Sobre mi</MenuItem>
                <MenuItem onClick={handleClose}>Educación</MenuItem>
                <MenuItem onClick={handleClose}>Experiencia</MenuItem>
                <MenuItem onClick={handleClose}>Proyectos</MenuItem>
                <MenuItem onClick={handleClose}>Contacto</MenuItem>
            </Menu>
        </div>
    );
}

