import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ name, imageLink, description, price }) => {
  console.log(description);
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Paper elevation={2}>
        <Card>
          <CardMedia component="img" src={imageLink} alt={`${name} pot`} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="h5" component="div">
              {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
            <Button size="small">Buy Now</Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
