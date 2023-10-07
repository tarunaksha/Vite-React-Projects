import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/tarunaksha")
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className="bg-gray-500 p-5 text-center text-white">
      Github followers:{data.followers}
      <img src={data.avatar_url} width={300} alt="Github profile pic" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/tarunaksha")
    return response.json()
}