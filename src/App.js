import './App.css';
import Do from './Notes/Do';
import Re from './Notes/Re';
import Mi from './Notes/Mi';
import Fa from './Notes/Fa';
import Sol from './Notes/Sol';
import La from './Notes/La';
import Si from './Notes/Si';
import { useState } from 'react';

const App = () => {

  const [note, setNote] = useState("");

  const noteClicked = (newNote) => {
    setNote(newNote);
  }

  return (
    <div>
      <div className="piano">
        <Do noteClick={noteClicked}/>
        <Re noteClick={noteClicked}/>
        <Mi noteClick={noteClicked} activeNote={note}/>
        <Fa noteClick={noteClicked} buttonDisabled={note === "Do"}/>
        <Sol />
        <La />
        <Si />
      </div>

      <span>Basilan nota: {note}</span>
    </div>
  );
}

export default App;