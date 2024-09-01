import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

const scrollToHome = () => {
  var section : Element = GetDomObj("homeContent");
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};

const scrollToNews = () => {
  var section : Element = GetDomObj("newsContent");
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};

const scrollToAbout = () => {
  var section : Element = GetDomObj("aboutContent");
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};

const scrollToFaq = () => {
  var section : Element = GetDomObj("faqContent");
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};

const scrollToGalerie = () => {
  var section : Element = GetDomObj("galerieContent");
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};

const scrollToContact = () => {
  var section : Element = GetDomObj("contactContent");
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};

function GetDomObj(name : string) : Element {
  return (document.querySelector( '#' + name )) ?? new Element();
}

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 10 }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant="text" color="info" size="small" onClick={scrollToHome}>
              Home
              </Button>
              <Button variant="text" color="info" size="small" onClick={scrollToNews}>
              News
              </Button>
              <Button variant="text" color="info" size="small" onClick={scrollToAbout}>
                Über uns
              </Button>
              <Button variant="text" color="info" size="small" onClick={scrollToFaq}>
                FAQ
              </Button>
              <Button variant="text" color="info" size="small" onClick={scrollToGalerie}>
                Galerie
              </Button>
              <Button variant="text" color="info" size="small" onClick={scrollToContact}>
                Kontakt
              </Button>
            </Box>
          </Box>
          
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem>Home</MenuItem>
                <MenuItem>News</MenuItem>
                <MenuItem>Über uns</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Galerie</MenuItem>
                <MenuItem>Kontakt</MenuItem>     
                
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}