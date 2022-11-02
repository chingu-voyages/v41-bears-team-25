import { Container } from "@mui/material";
import React from "react";
import product1 from "../assets/images/Product1.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const ProductDetails = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={product1} alt="Multicolored pots" height="500" />
          </Grid>
          <Grid md={5}>
            <Typography variant="h1">Product Name</Typography>
            <Typography variant="h3">Price</Typography>
            <Typography variant="h4">
              <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
              </ul>
            </Typography>
            <Button variant="contained" size="small">
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetails;
