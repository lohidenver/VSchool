import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import data from "./data";

export default function App() {
  console.log("App connected");
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        place={item.place}
        description={item.description}
        price={item.price}
        timeToGo={item.timeToGo}
        img={item.img}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}
