import React, { useState } from "react";

function CreateArea(props) {
  // Get the input title and content
  // When click the button, pass them to App.jsx

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // function handleTitle(event) {
  //   const input = event.target.value;
  //   setNote((prev) => {
  //     return {
  //       title: input,
  //       content: prev.content,
  //     };
  //   });
  // }

  // function handleContent(event) {
  //   const input = event.target.value;
  //   setNote((prev) => {
  //     return {
  //       title: prev.title,
  //       content: input,
  //     };
  //   });
  // }

  // Prevent rerendering the website upon click the button which will invoke the
  // form submission behavior
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("You clicked submit.");
  // }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevItems) => {
      return { ...prevItems, [name]: value };
    });
  }

  function submitNode(event) {
    props.setItem(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNode}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
