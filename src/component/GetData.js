import axios from "axios";
import React from "react";
import { useReducer, useEffect } from "react";
const initialState = {
  isLoading: true,
  post: {},
  error: "",
};
const reducer = (action, state) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        isLoading: false,
        post: action.payload,
        error: "",
      };
    case "FAILED":
      return {
        isLoading: false,
        post: {},
        error: "An error accured",
      };
    default:
      return state;
  }
};

const GetData = () => {
  const [data, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((Response) => {
        dispatch({ type: "SUCCESS", payload: Response.data });
      })
      .catch((error) => {
        dispatch({ type: "FAILED" });
      });
  }, []);

  return (
    <div>
      {data.isLoading ? "Loading" : data.post.body}
      {data.error && data.error}
    </div>
  );
};

export default GetData;
