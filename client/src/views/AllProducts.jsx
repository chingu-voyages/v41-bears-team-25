import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";

const AllProducts = () => {
  const [appData, setAppData] = useState({});
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json().then(setAppData(data))
    )
  );

  return (
    <>
      {isLoading && <div>loading app</div>}
      {error && <div>error loading app</div>}
      <div>AllProducts</div>
    </>
  );
};

export default AllProducts;
