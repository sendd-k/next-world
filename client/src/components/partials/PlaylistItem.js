import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PlaylistItem(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/getWorld/${props.worldId}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setImage(response.data.image);
        setDescription(response.data.description);
      })
      .catch((error) => {});
  }, []);

  const deleteWorld = function () {
    console.log("DELETEWORLD");
  //   const params = useParams();
  //   console.log("params: ", params);

  //   axios
  //     .post(`http://localhost:3001/:id/${props.worldId}`)
  //     .then((response) => {
  //       setTitle(response.data.title);
  //       setAuthor(response.data.author);
  //       setImage(response.data.image);
  //       setDescription(response.data.description);
  //     })
  //     .catch((error) => {});

  }


  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>Author: {author}</h2>
      <h3>Description: {description}</h3>
      <img src={image} alt={title} />
      <button onClick={deleteWorld}>Delete World</button>
    </div>
  );
}
