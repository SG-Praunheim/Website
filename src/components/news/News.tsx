import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

type NewsEntry = {
    id: number,
    title: string,
    text: string[],
    author: string,
    date: string,
};

type NewsEntries = {
    success: boolean,
    newsEntries: NewsEntry[],
};

var newsData: NewsEntries = {
    success: true,
    newsEntries: [
        {
            id: 0,
            title: "",
            text: [],
            author: "",
            date: '',
        },
    ],
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
    // WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  });

function Author({ author }: { author: NewsEntry }) {
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
              <Avatar
                alt={author.author}
                sx={{ width: 24, height: 24 }}
              />
          </AvatarGroup>
          <Typography variant="caption">
          {author.author}
          </Typography>
        </Box>
        <Typography variant="caption">{author.date}</Typography>
      </Box>
    );
  };

export default function News(){
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const [array, setArray] = React.useState(newsData.newsEntries);

    async function handleNewsCall(next: boolean, id: number) {

        var anzahl: number = 2;

        const response = await fetch(`https://niklasdeegapi.azurewebsites.net/News?anzahl=${anzahl}&id=${id}&next=${next}`, {
            method: "Get",
        });
        const result = await response.json();
        
        if (result.success) {
            setArray(result.newsEntries);
        }
    }

    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        handleNewsCall(true, 0);
    }

    const handleNextClick = () => {
        var id: number

        if (array.length == 0) {
            id = -1;
        }
        else {
            id = array[array.length - 1].id;
        }
        handleNewsCall(true, id);
    }

    const handleBackClick = () => {
        var id: number;
        if (array.length == 0) {
            id = -1;
        }
        else {
            id = array[0].id;
        }
        handleNewsCall(false, id);
    }

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    return(
        <React.Fragment>
            <Divider id="newsContent"/>
            <Typography variant='h3' align='center' gutterBottom>News</Typography>

            <Grid container spacing={2} columns={12}>

            {array.map((data, index) => (

          <Grid size={{ xs: 12, md: 6 }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
            >
              <SyledCardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {data.title}
                </Typography>

                {data.text.map((t, index) => (
                <StyledTypography key={index} variant="body2" color="text.secondary" gutterBottom>
                {t}
              </StyledTypography>
                ))}

              </SyledCardContent>
              <Author author={data} />
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

        </React.Fragment>
    )
};