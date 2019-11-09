import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
// const API = "https://www.getpostman.com/collections/154368028fbcde186fda";
const API = "https://swapi.co/api/starships/9/";
const Home = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <h2>Se obtuvieron datos</h2>
  );
};
// : (
// <>
//   {initialState.mylist.length > 0 && (
//     <Categories title="Mi Lista">
//       <Carousel>
//         {initialState.mylist.map((item) => (
//           <CarouselItem key={item.id} {...item} />
//         ))}
//       </Carousel>
//     </Categories>
//   )}
//   <Categories title="Tendencias">
//     <Carousel>
//       {initialState.trends.map((item) => (
//         <CarouselItem key={item.id} {...item} />
//       ))}
//     </Carousel>
//   </Categories>
//   <Categories title="Originales de Platzi Video">
//     <Carousel>
//       {initialState.originals.map((item) => (
//         <CarouselItem key={item.id} {...item} />
//       ))}
//     </Carousel>
//   </Categories>
// </>
// );
// };

export default Home;
