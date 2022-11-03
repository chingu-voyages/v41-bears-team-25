import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import "./AllProducts.scss";
import ProductCard from "../components/ProductCard";

const mockPotsData = [
  // to be deleted when API is ready
  {
    id: 20129,
    name: "Aya Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Aya Pot description",
  },
  {
    id: 32423,
    name: "Bella Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Bella Pot description",
  },
  {
    id: 23423,
    name: "Coco Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Coco Pot description",
  },
  {
    id: 234231,
    name: "Dora Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Dora Pot description",
  },
  {
    id: 12454,
    name: "Ella Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Ella Pot description",
  },
  {
    id: 89981279,
    name: "Fiona Pot",
    imageLink: "https://i.imgur.com/8Km9tLL.jpg",
    price: 39.99,
    description: "Fiona Pot description",
  },
];

const AllProducts = () => {
  const [appData, setAppData] = useState([]);
  // const { isLoading, error, data } = useQuery(["repoData"], () =>
  //   fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
  //     (res) => res.json().then(setAppData(data))
  //   )
  // );
  useEffect(() => {
    setAppData(mockPotsData);
  }, []); // we could've use react query but this is to mimic a useEffect fetch at load
  console.log(appData);
  return (
    <>
      <section className="all-products">
        <Grid container spacing={2}>
          {appData &&
            appData.length > 0 &&
            appData.map(({ id, ...pot }) => <ProductCard {...pot} key={id} />)}
        </Grid>
      </section>
    </>
  );
};

export default AllProducts;
