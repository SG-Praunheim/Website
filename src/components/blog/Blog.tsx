import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
import TemplateFrame from './TemplateFrame';
import getBlogTheme from './theme/getBlogTheme';
import About from './../about/About';
import Faq from './../faq/Faq';
import Galerie from './../galerie/Galerie';
import Contact from '../contact/Contact';
import Guestbook from '../guestbook/Guestbook';
import News from '../news/News'


export default function Blog() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const blogTheme = createTheme(getBlogTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  // This code only runs on the client side, to determine the system color preference
  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <TemplateFrame
      toggleCustomTheme={toggleCustomTheme}
      showCustomTheme={showCustomTheme}
      mode={mode}
      toggleColorMode={toggleColorMode}
    >
      <ThemeProvider theme={showCustomTheme ? blogTheme : defaultTheme}>
        <CssBaseline enableColorScheme />

        <AppAppBar />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
        >
          <MainContent />
          {/* <News/> */}
          {/* ToDo: Über uns, FAQ, Galerie und Kontakt einfügen */}
          <About/> 
          <Faq/>
          {/* <Galerie/> */}
          <Contact/> 
          {/* mit Google Maps und Socials */}
          <Guestbook/>
        </Container>
        <Footer/>
      </ThemeProvider>
    </TemplateFrame>
  );
}
