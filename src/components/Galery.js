import React, { useEffect, useState } from "react";

function Galery(props) {
  //const [myDate, setDate] = useState("");
  const [imgList, setImgList] = useState([]);

  // COMPONENT DID MOUNT
  useEffect(() => {
    console.log("useEffect Galery");

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setImgList(json)
      });
  }, []);

  return <div>
    { 
      imgList.slice((props.pageNum - 1)*10, props.pageNum*10).map(
        (img) => {
          return <img key={img.id} id={img.id} src={img.thumbnailUrl} width="50px" height="50px" />
        }

      ) 
    }
  </div>;
};

export default Galery;
