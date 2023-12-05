import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  link,
  name,
  serial
}) {
  const [open, setOpen] = React.useState(false);
  console.log("datosx",
    link,
    name,
    serial
  )
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        VER VIDEO
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              CERRAR VIDEO
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              {/* save */}
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <video
              style={{
                display: 'flex',
                justifyContent: 'center',
                height: '80vh',
                backgroundColor: 'black',
                color: 'white'
              }}
              loop
              controls
              controlsList="nodownload"
              // poster="https://assets.codepen.io/6093409/river.jpg"
              // autoplay
            >
              <source
                src={`https://lodashy.com:9009/${link}`}
                type="video/mp4"
              />
            </video>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
