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
import { ImageList, ImageListItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Wappen from '../../assets/SGP_Wappen.png';
import Carousel from 'react-material-ui-carousel';
import Header from '../../assets/header.jpg'


export default function Galerie() {
  // const theme = useTheme();
  // const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  // function imageCols(): number {
  //   if (matchDownSm) {
  //     return 1;
  //   }
  //   if (matchDownMd) {
  //     return 2;
  //   }

  //   return 4;
  // };

  return (
    <React.Fragment>
      <Divider id="galerieContent" />
      <Typography variant="h3" align='center' gutterBottom>Galerie</Typography>

      <Typography variant="body2" gutterBottom>Dies sind Beispielbilder. Die "echte" Galerie ist gerade im entstehen...</Typography>

      <Carousel>
        {
        itemData.map((image, i) => <img key={i} src={image.img.src} />)
        }
      </Carousel>

      {/* <ImageList sx={{ width: '100%', height: '40rem' }} cols={imageCols()}>
                {itemData.map((item) => (
                    <ImageListItem>
                        <img
                            src={item.img.src}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList> */}

    </React.Fragment>
  )
};

const itemData = [
  {
    img: Wappen,
    title: 'Wappen',
  },
  {
    img: Header,
    title: 'Header',
  },
  {
    img: Wappen,
    title: 'Wappen',
  },
  {
    img: Header,
    title: 'Header',
  },
  {
    img: Wappen,
    title: 'Wappen',
  },
  {
    img: Header,
    title: 'Header',
  },
  {
    img: Wappen,
    title: 'Wappen',
  },
  {
    img: Header,
    title: 'Header',
  },
  {
    img: Wappen,
    title: 'Wappen',
  },
  {
    img: Header,
    title: 'Header',
  },
  {
    img: Wappen,
    title: 'Wappen',
  },
  {
    img: Header,
    title: 'Header',
  },

];