import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// array
// each element is an object

function App() {
  const [notes, setNote] = useState([]);

  function addItem(note) {
    // setNote((prev) => {
    //   return [...prev, note];
    // });
    setNote([...notes, note]);
  }

  function deleteItem(id) {
    setNote((prev) => {
      return prev.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea setItem={addItem} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            handleDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
