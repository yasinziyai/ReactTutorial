import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => setData(Response.data));
  }, []);
  return (
    <div>
      {data.length ? (
        data.map((item) => <h3 key={item.id}>{item.title}</h3>)
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Data;
