import {useState} from 'react';
import axios from "axios";
import Cookies from "js-cookie";

//Page to collect new playlist info in form and submit
function CreatePlaylist() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = async (event) => {
    event.preventDefault();

    //get encoded jwt cookie containing user id for assigning owner of playlist
    let token = Cookies.get('jwt');

    // post create playlist request to backend
    await axios.post(
      "http://localhost:3001/playlist/create",
      {
        title: title,
        description: description,
        token: token
      },
      { withCredentials: true, credentials: "include" }
    ).then((response) => {
      //if successful, alert user then redirect back to playlist
      let data = response.data;
      if (data) {
        alert("Playlist Created");
        window.location.href = `/playlist/${data}`;
      } else {
        alert("Playlist creation unscuccessful");
      }
    });

  };
  return (
    <div className="App">
      <h1>Create Playlist</h1>
      <form>
        <input
          type="text"
          placeholder="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="descrition"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></input>
        <button onClick={submit}>Create</button>
      </form>
    </div>
  );
}

export default CreatePlaylist;