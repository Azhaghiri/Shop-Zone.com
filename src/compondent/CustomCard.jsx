import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CustomCard(props) {
  const { img, name,url, des,alt,color,rate,size,dis } = props;

  const handleButtonClick = () => {
    window.open(url , "_blank");
  };

{
  const storeLocalStorage = () => {
    const item = { img, name, url, des, alt, color, rate, size,dis };
    const existingItems = JSON.parse(localStorage.getItem('storedItems')) || [];
    existingItems.push(item);
    localStorage.setItem('storedItems', JSON.stringify(existingItems));
  };

  return (
    <Card style={{ border: '0px solid black', borderRadius: '15px 15px 15px 15px', boxShadow: '0 2px 5px black', margin: '20px', fontFamily: 'Arial, sans-serif',objectFit:'contain' }} >
      <CardMedia
        component="img"
        alt={alt}
        height="140"
        style={{ fontFamily: 'Arial, sans-serif' }}
        marginbottom='20px'
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Arial, sans-serif' }}>
          {name}
        </Typography>
        <Typography variant="body2" style={{ fontFamily: 'Arial, sans-serif' }}>
         {des}
        </Typography>
        <Typography style={{ fontFamily: 'Arial, sans-serif' }}>
        Rate: {rate}
        </Typography>
        <Typography style={{ fontFamily: 'Arial, sans-serif' }}>
          {size}
        </Typography>
        <Typography style={{ fontFamily: 'Arial, sans-serif' }}>
          {dis}
        </Typography>
         {color}
      </CardContent>
      <CardActions>
        <Button onClick={storeLocalStorage} size="small" variant='contained' color='success'>Add to Card</Button>
        <Button onClick={handleButtonClick} size="small" variant='outlined' color='black'>More Items</Button>
      </CardActions>
    </Card>
  );
}
}