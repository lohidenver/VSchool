import React from "react";
import data from "./data";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

export default function App() {
  console.log(data);
  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}
