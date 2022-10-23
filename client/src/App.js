import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import ReduxTest from "./pages/ReduxTest";
import AllProducts from "./views/AllProducts";
import ProductDetails from "./views/ProductDetails";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  document.title = "storeapp";
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainPage />}>
            <Route path="allproducts" element={<AllProducts />} />
            <Route path="productdetails" element={<ProductDetails />} />
          </Route>
          <Route path="/reduxtest" element={<ReduxTest />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
