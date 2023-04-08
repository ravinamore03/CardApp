import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <Card sx={{ maxWidth: 345,display:"flex", alignSelf: "center", justifySelf:"center", justifyContent: "center"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          src="./src/assets/ErrorImage.webp"
          alt="Error 404 not found"
        />
      </CardActionArea>
    </Card>
  );
}