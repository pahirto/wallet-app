import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [inputContent, setInputContent] = useState("input");

  return (
    <>
      <h1>Home Page</h1>
      <input
        type="text"
        value={inputContent}
        onChange={event => {
          event.preventDefault();
          setInputContent(event.target.value);
        }}
      />
      <p>{inputContent}</p>
      <p />
      <Link to="/about">About page</Link>
    </>
  );
};

export default Home;
