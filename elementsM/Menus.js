import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { map } from 'rxjs';

import { useRouter } from 'next/router';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function CustomizedMenus({ tituloprincipal, arraymenus = [], cursos }) {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [titulo, settitulo] = React.useState("");
    const [submenus, setsubmenus] = React.useState([]);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        if (tituloprincipal !== undefined) {
            settitulo(tituloprincipal)
        }
        if (arraymenus.length > 0) {
            setsubmenus(arraymenus)
        }
    }, [tituloprincipal, arraymenus])

    const navegacion = (menu) => {
        if (menu !== "EC0217.01" && 
        menu !== "EC0301" && menu !== "EC0366" && 
        menu !== "EC0076"
            && menu !== "WORD ASSOCIATE"
            && menu !== "EXCEL ASSOCIATE"
            && menu !== "EXCEL EXPERT"
            && menu !== "PLAN DE CARRERA PROFESIONAL"
            && menu !== "EXCEL"
        ) {
            router.push(`/${menu.toLowerCase()}`)
        }
        if (menu === "EC0217.01") {
            router.push(`/ce/ec021701`)
        }
        if (menu === "EC0301") {
            router.push(`/ce/ec0301`)
        }
        if (menu === "EC0366") {
            router.push(`/ce/ec0366`)
        }
        if (menu === "EC0076") {
            router.push(`/ce/ec0076`)
        }
        if (menu === "EXCEL EXPERT") {
            router.push(`/microsoft/excelexpert`)
        }
        if (menu === "EXCEL ASSOCIATE") {
            router.push(`/microsoft/excelassociate`)
        }
        if (menu === "WORD ASSOCIATE") {
            router.push(`/microsoft/wordassociate`)
        }
        if (menu === "PLAN DE CARRERA PROFESIONAL") {
            router.push(`/microsoft/plandecarrera`)
        }
        if (menu === "EXCEL") {
            router.push(`/microsoft/curso-excel`)
        }
    }

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                style={{backgroundColor: '#6bb023'}}
            >
                {titulo}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {submenus.map((menu) => (
                    <MenuItem onClick={() => { navegacion(menu) }} disableRipple>
                        {/* <EditIcon /> */}
                        {menu}
                    </MenuItem>
                ))
                }
            </StyledMenu>
        </div>
    );
}