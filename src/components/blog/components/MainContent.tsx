import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import FormControl from '@mui/material/FormControl';
// import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Divider from '@mui/material/Divider';
import Header from './../../../assets/header.jpg';
import Link from '@mui/material/Link';

const text1 : string = `Wir sind ein engagierter Kegelclub, der sportlichen Ehrgeiz und geselliges Miteinander vereint. Bei uns sind alle willkommen, die Spaß am Kegeln haben – egal ob Anfänger, Hobbykegler oder ambitionierte Wettkämpfer.`;

const text2 : string = `Unser Training findet jeden Dienstag ab 17 Uhr statt. Dabei kannst du deine Technik verbessern, dich mit anderen Mitgliedern messen und die Freude am Kegelsport erleben. Wir bieten eine entspannte Atmosphäre, in der jeder auf seine Kosten kommt.`;

const text3 : string = 'Für die Saison 25/26 haben wir wieder 2 Mannschaften gemeldet. Unsere 1. Mannschafft spielt in der Gruppenliga (M-GL2-120). Unsere 2. Mannschafft spielt in der B-Liga (X-BL2) im Bezirk 2.';

const text5 : string = `Hobbykegler aufgepasst! Du möchtest Kegeln ohne Vereinsbindung? Kein Problem! Unsere Bahnen können auch von Hobbykeglern gemietet werden – ideal für gesellige Abende mit Freunden, Feiern oder einfach, um den Alltag hinter sich zu lassen.`;

const text6 : string = `Besuche uns und erlebe die Faszination Kegelsport hautnah!`;

const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Clubabend',
    title: 'Jeder 3. Dienstag ist ab sofort Clubabend bei uns',
    description:
      'Jeden 3. Dienstag im Monat findet ein Clubabend statt, an dem wir beisammen kommen und diverse Kegelspiele spielen. Unser Training findet natürlich weiterhin jeden Dienstag statt.',
    authors: [
      { name: 'Niklas Deeg', avatar: '/static/images/avatar/1.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Sport',
    title: 'Der Saisonbeginn steht an',
    description:
      'Es ist endlich so weit. Die Saison 24/25 fängt endlich an. Zum Auftakt stehen sowohl für die 1. als auch für die zweite Mannschaft ein Auswärtsspiel an.',
    authors: [{ name: 'Niklas Deeg', avatar: '/static/images/avatar/6.jpg' }],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  // WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              // src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">31.08.2024</Typography>
    </Box>
  );
};

// export function Search() {
//   return (
//     <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
//       <OutlinedInput
//         size="small"
//         id="search"
//         placeholder="Search…"
//         sx={{ flexGrow: 1 }}
//         startAdornment={
//           <InputAdornment position="start" sx={{ color: 'text.primary' }}>
//             <SearchRoundedIcon fontSize="small" />
//           </InputAdornment>
//         }
//         inputProps={{
//           'aria-label': 'search',
//         }}
//       />
//     </FormControl>
//   );
// }

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div id="homeContent">
          <img src={Header.src} alt="Headerpicture" width="80%" style={{display: 'block', margin: 'auto'}}/>
          <Typography variant="h1" gutterBottom sx={{textAlign: 'center'}}>
            Herzlich Willkommen
          </Typography>
          <Typography variant="h1" gutterBottom sx={{textAlign: 'center'}}>
            beim Kegelsportclub SG Praunheim!
          </Typography>

          <Typography variant="body1">
            {text1}
          </Typography>
          <Typography variant="body1" sx={{mt: 2}}>
            {text2}
          </Typography>
          <Typography variant="body1">
            {text3}
          </Typography>      
          <Typography variant='body1'>
            Auf der <Link href='https://hkbv.sportwinner.de/#'>HKBV Sportwinner Seite</Link> findest du den aktuellen Spielplan und alle Ergebnisse.
          </Typography>
          <Typography variant="body1" sx={{mt: 2}}>
            {text5}
          </Typography>
          <Typography variant="body1">
            {text6}
          </Typography>
        </div>

        {/* <Divider id="newsContent"/> */}

        {/* <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <Search />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box> */}
        
            {/* <Typography variant='h3' align='center' gutterBottom>News</Typography> */}
          
          {/* <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
          }}
        >
          <Search />
          <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
          </IconButton>
        </Box> */}
        {/* <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(0)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
            >
              <SyledCardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {cardData[0].title}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {cardData[0].description}
                </StyledTypography>
              </SyledCardContent>
              <Author authors={cardData[0].authors} />
            </SyledCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(1)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
            >
              <SyledCardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {cardData[1].title}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {cardData[1].description}
                </StyledTypography>
              </SyledCardContent>
              <Author authors={cardData[1].authors} />
            </SyledCard>
          </Grid>

        </Grid> */}
      </Box>
    </React.Fragment>
  );
}
