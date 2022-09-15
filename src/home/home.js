import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Api } from "../services/api";
import ListaPosts from "./listaPosts/listaPosts";

const Home = () => {
  const { data } = Api();

  console.log(data);
  return (
    <div>
      
      <Header />
      <ListaPosts post={data} />
      <Footer />
    </div>
  );
};

export default Home;