// App.js
import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'; // Generate unique IDs

function App() {
  const [note, setNote] = useState(''); // To store the current note
  const [notes, setNotes] = useState([]); // To store all notes

  // Handle input changes
  const handleChange = (e) => {
    setNote(e.target.value);
  };

  // Add the current note to the notes list
  const addNote = () => {
    if (note.trim() !== '') {
      const newNote = { id: uuidv4(), text: note };
      setNotes([...notes, newNote]);
      setNote(''); // Clear input field after adding
    }
  };

  // Delete a note by ID
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <h1>Notepad</h1>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Write your note here..."
        className="textarea"
      />
      <button onClick={addNote} className="add-button">
        Add Note
      </button>
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <p>{note.text}</p>
            <button onClick={() => deleteNote(note.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
