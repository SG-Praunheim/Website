'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Divider from '@mui/material/Divider';
import Header from './../../../assets/header.jpg';
import Link from '@mui/material/Link';

const text1 = `Wir sind ein engagierter Kegelclub, der sportlichen Ehrgeiz und geselliges Miteinander vereint. Bei uns sind alle willkommen, die Spaß am Kegeln haben – egal ob Anfänger, Hobbykegler oder ambitionierte Wettkämpfer.`;

const text2 = `Unser Training findet jeden Dienstag ab 17 Uhr statt. Dabei kannst du deine Technik verbessern, dich mit anderen Mitgliedern messen und die Freude am Kegelsport erleben. Wir bieten eine entspannte Atmosphäre, in der jeder auf seine Kosten kommt.`;

const text3 = 'Für die Saison 25/26 haben wir wieder 2 Mannschaften gemeldet. Unsere 1. Mannschafft spielt in der Gruppenliga (M-GL2-120). Unsere 2. Mannschafft spielt in der B-Liga (X-BL2) im Bezirk 2.';

const text5 = `Hobbykegler aufgepasst! Du möchtest Kegeln ohne Vereinsbindung? Kein Problem! Unsere Bahnen können auch von Hobbykeglern gemietet werden – ideal für gesellige Abende mit Freunden, Feiern oder einfach, um den Alltag hinter sich zu lassen.`;

const text6 = `Besuche uns und erlebe die Faszination Kegelsport hautnah!`;

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
  // {
  //   img: 'https://picsum.photos/800/450?random=3',
  //   tag: 'Design',
  //   title: 'Designing for the future: trends and insights',
  //   description:
  //     'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
  //   authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
  // },
  // {
  //   img: 'https://picsum.photos/800/450?random=4',
  //   tag: 'Company',
  //   title: "Our company's journey: milestones and achievements",
  //   description:
  //     "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
  //   authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
  // },
  // {
  //   img: 'https://picsum.photos/800/450?random=45',
  //   tag: 'Engineering',
  //   title: 'Pioneering sustainable engineering solutions',
  //   description:
  //     "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
  //   authors: [
  //     { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
  //     { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
  //   ],
  // },
  // {
  //   img: 'https://picsum.photos/800/450?random=6',
  //   tag: 'Product',
  //   title: 'Maximizing efficiency with our latest product updates',
  //   description:
  //     'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
  //   authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
  // },
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

function Author({ authors }) {
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
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
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
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
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
      </Box>
    </React.Fragment>
  );
}
