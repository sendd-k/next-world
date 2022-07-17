import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import RedirectPopup from "./popups/RedirectPopup";

export default function UserFavouritesItem(props) {
  const [title, setTitle] = useState("");
  const [popupDeleted, setPopupDeleted] = useState(false);
  const playlistUrl = `/playlist/${props.PlaylistId}`;
  const redirectUrl = `/user`;

  useEffect(() => {
    axios
      .get(`/favourites/user/${props.PlaylistId}`)
      .then((response) => {
        setTitle(response.data[0].title);
      });
  }, []);

  // console.log("title", title);
  const deleteFavourite = () => {
    let confirm = window.confirm(
      "Are you sure you want to delete this playlist?"
    );
    if (confirm) {
      console.log("delete");
      const response = axios
        .delete(`/favourites/delete/${props.PlaylistId}`, {
          data: { _id: props.PlaylistId },
        })
        .then((response) => {
          const data = response.data;
          // console.log("data in playlistitem: ", data);
          if (data === "deleted") {
            setPopupDeleted(true);
          }
        })
        .catch((error) => {});
    }
  };

  return (
    <div>
      <h3>
        <Link to={playlistUrl}>{title}</Link>
        <i className="bi bi-trash" onClick={deleteFavourite}></i>
      </h3>
      <RedirectPopup
        trigger={popupDeleted}
        setTrigger={setPopupDeleted}
        redirectUrl={redirectUrl}
      >
        <h1>Favourite Delete</h1>
      </RedirectPopup>
    </div>
  );
}