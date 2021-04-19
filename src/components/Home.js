import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
function Home() {
  const handleData = async () => {
    const { data } = await axios.get("http://localhost:4000/posts");
    console.log(data);
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Home;
