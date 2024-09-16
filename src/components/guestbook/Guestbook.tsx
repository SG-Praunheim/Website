'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import GuestbookForm from './GuestbookForm';
import { EventManager } from '@/events/EventBus';

type GuestbookEntry = {
    id: number,
    text: string,
    author: string,
    date: string,
};

type GuestbookEntries = {
    success: boolean,
    guestbookEntries: GuestbookEntry[],
};

var guestbookData: GuestbookEntries = {
    success: true,
    guestbookEntries: [
        {
            id: 0,
            text: "",
            author: "",
            date: '',
        },
    ],
};

// async function initGuestbookCall() {

//     const anzahl : number = 4;

//     const response = await fetch(`https://niklasdeegapi.azurewebsites.net/Guestbook?`, {
//         method: "Get",
//     });
//     const result = await response.json();
//     console.log(result);
//     if (result.success) {        
//         guestbookData.guestbookEntries = result.guestbookEntries;
//     }
// }

//Init Array Data from API
// initGuestbookCall();
// var init : boolean = false;
// console.log(init);
// if(init === false) {
//     init = true;

//     // console.log(init);
// };

export default function Guestbook() {
    // const theme = useTheme();
    // const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const [array, setArray] = React.useState(guestbookData.guestbookEntries);

    async function handleGuestbookCall(next: boolean, id: number) {

        var anzahl: number = 4;

        // if(matchDownSm){
        //     anzahl = 2;
        // }

        const response = await fetch(`https://niklasdeegapi.azurewebsites.net/Guestbook?anzahl=${anzahl}&id=${id}&next=${next}`, {
            method: "Get",
        });
        const result = await response.json();
        
        if (result.success) {
            setArray(result.guestbookEntries);
        }
    }

    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        handleGuestbookCall(true, 0);
    }

    const handleNextClick = () => {
        var id: number

        if (array.length == 0) {
            id = -1;
        }
        else {
            id = array[array.length - 1].id;
        }
        handleGuestbookCall(true, id);
    }

    const handleBackClick = () => {
        var id: number;
        if (array.length == 0) {
            id = -1;
        }
        else {
            id = array[0].id;
        }
        handleGuestbookCall(false, id);
    }

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const myCustomEvent = EventManager.getInstance('eventNewGuestbookEntry');

    myCustomEvent.addCustomEventListener('myMessage', (event) => {
        handleGuestbookCall(true, -1);
      });

    return (
        <React.Fragment>
            <Divider id="guestbookContent" />
            <Typography variant="h3" align='center' gutterBottom>Gästebuch</Typography>


            <Grid container spacing={2} columns={12}>
                {array.map((data, index) => (

                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(index)}
                            onBlur={handleBlur}
                            tabIndex={index}
                            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                        >
                            <SyledCardContent>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                    {data.text}
                                </StyledTypography>
                            </SyledCardContent>

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
                                    <Avatar
                                        alt={data.author}
                                        sx={{ width: 24, height: 24 }}
                                    />
                                    <Typography variant="caption">
                                        {data.author}
                                    </Typography>
                                </Box>
                                <Typography variant="caption">{data.date}</Typography>
                            </Box>

                        </SyledCard>
                    </Grid>

                ))}
            </Grid>

            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 6, md: 6 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="button"
                        sx={{ flexShrink: 0 }}
                        onClick={handleBackClick}
                    >
                        Zurück
                    </Button>
                </Grid>
                <Grid size={{ xs: 6, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="button"
                        sx={{ flexShrink: 0 }}
                        onClick={handleNextClick}
                    >
                        Weiter
                    </Button>
                </Grid>
            </Grid>

                <GuestbookForm/>

        </React.Fragment>
    )
};



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
    WebkitLineClamp: 8,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});
