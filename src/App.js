import './App.css';
import Do from './Notes/Do';
import Re from './Notes/Re';
import Mi from './Notes/Mi';
import Fa from './Notes/Fa';
import Sol from './Notes/Sol';
import La from './Notes/La';
import Si from './Notes/Si';
import { useState, useEffect } from 'react';

const App = () => {

  const [note, setNote] = useState("");
  const [count, setCount] = useState(0);

  const noteClicked = (newNote) => {
    setNote(newNote);
  }

  //useEffect statei takip eder

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount((n) => n+1);
  //   }, 1000);
  // }, []);

  //componentdidmount
  //componentunmount
  useEffect(() => {
    let unmounted = false;
    console.log("bir")
    if(!unmounted){
      console.log("iki");
    }

    return (() => {
      unmounted = true;
      console.log("uc");
    })
  }, []);

  //componentdidupdate
  useEffect(() => {
    console.log("ahmet");
  }, [note]);
  
  return (
    <div>
      <div className="piano">
        <Do noteClick={noteClicked}/>
        <Re noteClick={noteClicked}/>
        <Mi noteClick={noteClicked} activeNote={note}/>
        <Fa noteClick={noteClicked} buttonDisabled={note === "Do"}/>
        <Sol noteClick={noteClicked}/>
        <La noteClick={noteClicked}/>
        <Si noteClick={noteClicked} buttonDisabled={note === "Sol"}/>
      </div>

      <span>Basilan nota: {note}</span>

      <hr />

      <p>{count}</p>
    </div>
  );
}

export default App;