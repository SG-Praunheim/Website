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
import Collapse from '@mui/material/Collapse';

const faqText0: string = "Na klar! Komm einfach Dienstags ab 18 Uhr vorbei und bring saubere turnschuhe. Es ist bestimmt jemand von uns da. Oder mach vorher einen Termin mit uns aus."
const faqText1: string = "Antwort 2"
const faqText2: string = "Antwort 3"

const StyledTypography = styled(Typography)({

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

export default function Faq() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleToggle = (index: number) => {
        switch(index){
            case 0:{
                setfaqOpen0(!faqOpen0);
                break;
            }
            case 1:{
                setfaqOpen1(!faqOpen1);
                break;
            }
            case 2:{
                setfaqOpen2(!faqOpen2);
                break;
            }
        }
    };

    const [faqOpen0, setfaqOpen0] = React.useState(false);
    const [faqOpen1, setfaqOpen1] = React.useState(false);
    const [faqOpen2, setfaqOpen2] = React.useState(false);

    return (
        <React.Fragment>
            <Divider id="faqContent" />
            <Typography variant="h3" gutterBottom>FAQ</Typography>
            
            <Grid size={{ xs: 12, md: 12 }}>
                <SyledCard
                    variant="outlined"
                    onFocus={() => handleFocus(0)}
                    onBlur={handleBlur}
                    tabIndex={0}
                    onClick={() => handleToggle(0)}
                    className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                >
                    <SyledCardContent>
                        <Typography gutterBottom variant="h6" component="div">Kann ich zum Probetraining kommen?</Typography>
                        <Collapse in={faqOpen0}>
                            <div id="collapse-text">
                               <Typography variant="body2" color="text.secondary" gutterBottom>{faqText0}</Typography>                                
                            </div>
                        </Collapse>
                    </SyledCardContent>
                </SyledCard>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
                <SyledCard
                    variant="outlined"
                    onFocus={() => handleFocus(1)}
                    onBlur={handleBlur}
                    tabIndex={1}
                    onClick={() => handleToggle(1)}
                    className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                >
                    <SyledCardContent>
                        <Typography gutterBottom variant="h6" component="div">Frage 2</Typography>
                        <Collapse in={faqOpen1}>
                            <div id="collapse-text">
                               <Typography variant="body2" color="text.secondary" gutterBottom>{faqText1}</Typography>                                
                            </div>
                        </Collapse>
                    </SyledCardContent>
                </SyledCard>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
                <SyledCard
                    variant="outlined"
                    onFocus={() => handleFocus(2)}
                    onBlur={handleBlur}
                    tabIndex={2}
                    onClick={() => handleToggle(2)}
                    className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                >
                    <SyledCardContent>
                        <Typography gutterBottom variant="h6" component="div">Frage 3</Typography>
                        <Collapse in={faqOpen2}>
                            <div id="collapse-text">
                               <Typography variant="body2" color="text.secondary" gutterBottom>{faqText2}</Typography>                                
                            </div>
                        </Collapse>
                    </SyledCardContent>
                </SyledCard>
            </Grid>

        </React.Fragment>
    )
};