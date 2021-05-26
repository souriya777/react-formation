import React, { useEffect, useState } from "react";

function Galery() {
  const [myDate, setDate] = useState("");
  const [imgList, setImgList] = useState([]);

  // COMPONENT DID MOUNT
  useEffect(() => {
    console.log("useEffect Galery");

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setImgList(json.slice(0, 9))
      });
  }, []);

  useEffect(() => {
    if(imgList.length < 1) {
      return;
    }
    
    console.log(imgList);
  }, [imgList])

  setInterval(() => setDate(new Date().toString()), 1000);

  return <div>Hello!</div>;
};

export default Galery;
