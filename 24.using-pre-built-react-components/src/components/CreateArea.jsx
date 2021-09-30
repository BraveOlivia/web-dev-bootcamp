import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom,Fab } from '@mui/material';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [invoke, setInvoke] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function zoomIn(){
     setInvoke(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          type={!invoke&&"hidden"}
        />
        <textarea
          name="content"
          onClick={zoomIn}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={invoke?"3":1}
        />
        <Zoom in={true}>
        <Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
