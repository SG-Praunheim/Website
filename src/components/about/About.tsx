import * as React from 'react';
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
import ReactDOM from 'react-dom';
import ExpandText from './../expandText/ExpandText';

const aboutData : string = "Die Geschichte der SG Praunheim geht sicherlich auch auf das Gründungsjahr des Kegler‑Verein Praunheim 1933 zurück. Doch so weit möchten wir hier nicht in die Vergangenheit zurückgehen. Ein maßgebliches Jahr war 1992. In diesem Jahr bildeten die Clubs Blau Weiß Einigkeit und Falkeneck Herren eine Spielgemeinschaft namens Blau Weiß Einigkeit Falkeneck (B.W.E.F.). Die acht Kegler vom Club Falkeneck hatten Ihr zu Hause zuvor im Frankfurter Turnverein 1860. Der Club verfügte zwar über junge Spieler, allerdings versprach die geringe Mitgliederzahl keine erfolgreiche Zukunft. Der Club Blau Weiß Einigkeit war mit ca. 20 aktiven Mitgliedern verhältnismäßig stark, allerdings waren darunter relativ viele ältere Sportkameraden, so dass sich der damalige Vorstand schon Gedanken um das Fortbestehen des Clubs machen musste. Da die Chemie zwischen beiden Clubs von jeher stimmte und der Club Falkeneck bei Punktspielen fast immer von der Blau-Weiß-Einigkeit auf die Mütze bekommen hat, war die Spielgemeinschaft eine logische Konsequenz. Diese Spielgemeinschaft endet nach zwei Jahren in einer Fusion beider Clubs. Der Hauptverein KV Praunheim bestand damals noch aus weiteren eigenständigen Clubs - darunter auch der Club Kegelfreunde 60. Zwischen den Clubs B.W.E.F. und Kegelfreunde 60 herrschte schon immer eine gewisse Sympathie. Wenn es während einer Punktrunde zu einem Derby gekommen ist, endeten diese immer mit einem gemütlichen Beisammensein und jeder, der diese stimmungsvollen Runden vorzeitig verlassen musste, hatte etwas versäumt. Um zukünftig zusammen sportliche Erfolge feiern zu können, beschloss man im Jahr 2002 die SG Praunheim zu gründen, die noch bis heute Bestand hat. Mit heute 17 aktiven Keglern und 9 Passiven bildet die SG Praunheim Männer zahlenmäßig den größten Club im KV Praunheim. Zu diesen 26 Herren gesellten sich im Jahre 2005 unsere Damen. Es sind tatsächlich größtenteils unsere Ehefrauen. Diese dachten sich, was die können, können wir schon lange. Es begann mit einem donnerstäglichen Treffen auf der Kegelbahn und entwickelte sich zu einer aktiven Damenmannschaft. Sie eroberten sich frei nach dem Spruch \"der Pokal hat seine eigenen Gesetze\" gleich in der ersten Saison den Hessischen Classic Club Pokal und spielten sich bis in die Regionalliga. Aus den unterschiedlichsten Gründen zogen sich die Damen jedoch nach und nach aus dem aktiven Kegelsport zurück, sodass man von 2018 bis 2020 gemeinsam mit den Frauen der Vollkugel Bockenheim in einer vereinsübergreifenden Spielergemeinschaft unter dem Name SG Vollkugel Praunheim spielte. Heute treffen sich die Mädels zwar weiterhin, doch es geht keine aktive Mannschaft mehr an denn Start.";

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

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

export default function About() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
      );
    
      const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
      };
    
      const handleBlur = () => {
        setFocusedCardIndex(null);
      };
    return (
        <React.Fragment>
            <Divider id="aboutContent" />
            <Typography variant="h3" align='center' gutterBottom>Über Uns</Typography>

            <Grid size={{ xs: 12, md: 12 }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(0)}
              onBlur={handleBlur}
              tabIndex={0}
            //   onClick={}
              className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
            >
              <SyledCardContent>
                <ExpandText
                id="aboutID"
            maxLength={500}
            text={aboutData}
            />
              </SyledCardContent>
            </SyledCard>
          </Grid>
        </React.Fragment>
    )
};